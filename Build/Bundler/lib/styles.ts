import path from 'path';
import { colors, consoleColor, consoleTime } from './helper';
import { devMode, verbose } from '../bundle';
import { IDictionary } from '../Interface';
import { error } from 'console';
import autoprefixer from 'autoprefixer';
import watch from 'node-watch';
import sass from 'sass';
import cssNano from 'cssnano';
import postcss from 'postcss';
import fs from 'fs';

const fontsRx = new RegExp(/url\s*\(\s*("|')([^\"']*\.(woff\d?|eot|ttf))/g);
const imagesRx = new RegExp(/url\s*\(\s*("|')([^\"']*\.(jpe?g|png|svg|ico|gif))/g);

export async function compileScss(config: IDictionary) {
    consoleTime(config.source);
    let sassObject;
    try {
        sassObject = sass.compile(config.source,
            {
                loadPaths: [path.resolve(process.cwd(), 'node_modules')],
                sourceMap: devMode,
                quietDeps: true,
                sourceMapIncludeSources: true,
                silenceDeprecations: ['import'], // disable warnings for @import deprecations
                verbose: devMode,
            });
    } catch (e) {
        console.log(e);
        return null;
    }

    sassObject = await refactorCss(config, sassObject);

    bundlerPostCss(config, sassObject);

    consoleTime(config.source, false);
    consoleColor('\t=> ' + config.dest);
    return sassObject;
}

function bundlerPostCss(config: IDictionary, sassObject: sass.CompileResult) {

    const plugins = [autoprefixer];
    if (config?.minify !== 'never' && !devMode) {
        plugins.push(cssNano as any);
    }
    const options: any = {
        from: undefined,
        map: {
            prev: JSON.stringify(sassObject.sourceMap),
            inline: devMode,
        }
    };
    postcss(plugins)
        .process(sassObject.css, options)
        .then((postCssResult) => {
            postCssResult.warnings().forEach((warn) => {
                console.warn(warn.toString());
            });
            fs.writeFile(config.dest, postCssResult.css, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(' => ' + config.dest);
                }
            });
        });
}

async function refactorCss(config: IDictionary, sassObject: sass.CompileResult) {
    const baseTarget = config.dest.replace(/^(\.)?(.*\/).*$/, '$2');
    if (config.fonts) {
        config.fonts = config.fonts.replace(/\/$/, '') + '/';
        sassObject = moveAssets(sassObject, baseTarget, config.fonts, fontsRx);
    }
    if (config.images) {
        config.images = config.images.replace(/\/$/, '') + '/';
        sassObject = moveAssets(sassObject, baseTarget, config.images, imagesRx);
    }

    return sassObject;
}

function moveAssets(sassObject: sass.CompileResult, baseTarget: string, configPath: string, rx: RegExp) {
    let result;
    while ((result = rx.exec(sassObject.css))) {
        let oldPath = result[2];
        let newPath = oldPath.replace(/.*\//, configPath);

        sassObject.loadedUrls.forEach(async url => {
            let urlPath = getRelPath(url.pathname);
            let data = fs.readFileSync(urlPath, { encoding: 'utf8', flag: 'r' });
            if (data.includes(oldPath)) {
                let importPath = getRelPath(url.pathname).replace(/^(.*\/).*$/, '$1');
                let fileToCopy = importPath + oldPath;
                let fileTarget = '.' + baseTarget + newPath;
                fileToCopy = fileToCopy.replace(encodeURI(process.cwd()) + '/', './');
                sassObject.css = sassObject.css.replace(oldPath, newPath);
                copyFile(fileToCopy, fileTarget, urlPath);
            }

        });
    }
    return sassObject;
}

function copyFile(source: string, target: string, scssFile: string) {
    const targetDir = target.replace(/(.*\/).*$/, "$1");

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
    }
    if (fs.existsSync(source)) {
        fs.copyFileSync(source, target);
        if (verbose) {
            consoleColor("File copied: " + source + ' to ' + target, colors.green);
        }

    } else {
        consoleColor("File not found: " + source, colors.red);
        consoleColor("\tused in : " + scssFile, colors.red);
        console.error()
    }
}

function getRelPath(path: string) {
    path = path.replace(encodeURI(process.cwd() + '/'), './');
    return path;
}

export async function watchScss(config: IDictionary, sassObject: sass.CompileResult) {
    sassObject.loadedUrls.forEach(watchUrl => {
        try {
            // const watchPath = config.source.replace(/(.*)\/.*/, '$1');
            watch(watchUrl.pathname, { recursive: false }, function (evt: any, name: string) {
                let label = name + ' changed.';
                consoleColor(label, colors.orange);
                compileScss(config);
            });
        } catch (err: any) {
            console.log(error);
            if (err.name === 'AbortError') return;
            throw err;
        }
    })

}

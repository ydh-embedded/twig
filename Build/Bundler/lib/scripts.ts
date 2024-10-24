import { IDictionary } from '../Interface';
import { devMode } from '../bundle';
import { colors, consoleColor, consoleTime } from './helper';

import esbuild from 'esbuild';
import type { BuildOptions, CommonOptions, Plugin, PluginBuild } from 'esbuild';

export async function buildTs(config: IDictionary) {
    let buildConfig : BuildOptions = {
        entryPoints: [config.source],
        bundle: true,
        minify: !devMode,
        outfile: config.dest,
        plugins: [
            timerPlugin(config.source)
        ]
    };
    let tsObject = await esbuild.build(buildConfig);
    // console.log(tsObject);
    consoleColor('\t=> ' + config.dest);
}

export async function watchTs(config: IDictionary) {
    let ctx = await esbuild.context({
        entryPoints: [config.source],
        bundle: true,
        outfile: config.dest,
        logLevel: 'info',
        sourcemap: 'inline',
        plugins: [
            timerPlugin(config.source)
        ]
    });

    await ctx.watch();

    consoleColor('Start watching ' + config.source, colors.orange);
}

const timerPlugin = (source: string): Plugin => {
    return {
        name: 'timerPlugin',
        setup(build: PluginBuild) {
            build.onStart(() => {
                consoleTime(source);
            });
            build.onEnd((result: esbuild.BuildResult<esbuild.BuildOptions>) => {
                consoleTime(source, false);
            });
            // build.onLoad({ filter: /(j|t)s$/ }, async (args: esbuild.OnLoadArgs) => {
            //     if (args.path.indexOf('node_modules')>0) {
            //         return null;
            //     }
            //     console.log(args.path.indexOf('node_modules'));
            //     console.log(args.path);
            //     return null;
            // });
        },
    };
};

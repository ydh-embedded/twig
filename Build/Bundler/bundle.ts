/**
 *
 * ddev exec npx ts-node src/Bundler/bundle.ts
 *  dev : dev mode, without is prod (minify)
 * -w   : watch mode
 */

import { IDictionary } from './Interface';
import { consoleTime } from './lib/helper';
import { buildTs, watchTs } from './lib/scripts';
import { watchScss, compileScss } from './lib/styles';

import fs from 'fs';
import { exit } from 'process';

if (!fs.existsSync(process.cwd() + '/bundle.json')) {
    console.error('No configuration found!\nCreate /bundle.json');
    exit(1);
}

const bundleConfig = require(process.cwd() + '/bundle.json');
const modeSuffix = bundleConfig.modeSuffix ? bundleConfig.modeSuffix : '';

export const devMode = process.argv.includes('dev');
export const watchMode = process.argv.includes('--watch') || process.argv.includes('-w');
export const verbose = process.argv.includes('--verbose') || process.argv.includes('-v');
export const noWarnings = process.argv.includes('--no-warnings') || process.argv.includes('-q');

init();

export async function init() {
    // "NODE_OPTIONS=--trace-warnings ts-node ..." in packages.json
    if (noWarnings) {
        process.removeAllListeners('warning')
    }
    bundleConfig.bundles.forEach( async (config: IDictionary) => {
        if (!devMode) {
            config.dest = config.dest.replace(/(\.(css|js))$/, modeSuffix + '$1');
        }
        if (config.source.match(/\.s?css$/)) {
            let sassObject = await compileScss(config);
            if (sassObject && watchMode) {
                watchScss(config,sassObject);
            }
        } else if (config.source.match(/\.(ts|js)$/)) {
            await buildTs(config);
            if (watchMode) {
                watchTs(config);
            }
        } else {
            console.error('no valid source' + config.source);
            console.log();
        }
    });
}

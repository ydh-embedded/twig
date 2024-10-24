export const colors = {
    red: '\x1b[31m%s\x1b[0m',
    green: '\x1b[32m%s\x1b[0m',
    orange: '\x1b[33m%s\x1b[0m'
};

import { hrtime } from 'node:process';

export function consoleColor(message: string, color = colors.green) {
    message = color.replace(/%s/, message);
    console.log(message);
}


export function consoleTime(label: string, start = true, color = colors.green) {
    label = color.replace(/%s/, label);
    if (start) {
        console.time(label);
    } else {
        console.timeEnd(label);
    }
}

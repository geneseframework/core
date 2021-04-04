/**
 * Throws a warning with a given message and an eventual value linked to this message
 * @param message   //  The message to display
 * @param value     // The eventual value linked to message
 */
import * as chalk from 'chalk';

export function throwWarningColor(message = '', value: any = '', color: 'blue' | 'green' | 'magenta' | 'red' | 'yellow' = 'yellow'): void {
    console.log(chalk[`${color}Bright`](`Warning : ${message}\n`), value);
}

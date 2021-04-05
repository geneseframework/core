
/**
 * Checks if all the elements of the small array are in the big array
 * @param bigArray
 * @param smallArray
 */
export function includes(bigArray: any[], smallArray: any[]): boolean {
    if (areNotArrays(bigArray, smallArray)) {
        return false;
    }
    return !smallArray.some(element => !bigArray.includes(element));
}

/**
 * Checks if a value is a boolean
 * @param value     // The value to check
 */
export function isArray(value: any): value is Array<any> {
    return Array.isArray(value);
}

/**
 * Checks if all the elements of a given array are arrays
 * @param args
 */
export function areArrays(...args: any[][]): boolean {
    return args.every(a => isArray(a));
}

/**
 * Checks if two values are both arrays or both not arrays
 * @param first     // The first value
 * @param last      // The last value
 */
export function areNotArrays(first: any, last: any): boolean {
    return !isArray(first) || !isArray(last);
}

/**
 * Checks if two arrays have same length
 * @param array1
 * @param array2
 */
export function haveSameLength(array1: any[], array2: any[]): boolean {
    return areArrays(array1, array2) && array1.length === array2.length;
}

/**
 * Returns a flatten array from a given array
 * @param array     // The array to flat
 */
export function flat(array: any[]): any[] {
    if(!array || array.length === 0) {
        return [];
    }
    else if(Array.isArray(array[0])) {
        return flat(array[0]).concat(flat(array.slice(1)));
    }
    else {
        return [array[0]].concat(flat(array.slice(1)));
    }
}

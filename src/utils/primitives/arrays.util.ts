/**
 * Checks if a value is an array
 * @param data     // The value to check
 */
export function isArray(data: any): data is Array<any> {
    return Array.isArray(data);
}

/**
 * Checks if each value of an array are arrays
 * @param args      // The array to check
 */
export function areArrays(...args: any[][]): boolean {
    return args.every(a => isArray(a));
}

/**
 * Checks if two elements are both arrays or both not arrays
 * @param first     // The first element
 * @param last      // The last element
 */
export function areNotArrays(first: any, last: any): boolean {
    return !isArray(first) || !isArray(last);
}


/**
 * Returns deep flat of a given array array
 * @param array     // The array to flat
 */
export function flat(array: any[]): any[] {
    if(!array || array.length === 0) {
        return [];
    }
    else if(isArray(array[0])) {
        return flat(array[0]).concat(flat(array.slice(1)));
    }
    else {
        return [array[0]].concat(flat(array.slice(1)));
    }
}

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
 * Checks if two arrays have same length
 * @param array1        // The first array
 * @param array2        // The second array
 */
export function haveSameLength(array1: any[], array2: any[]): boolean {
    return areArrays(array1, array2) && array1.length === array2.length;
}

/**
 * Groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group
 * @param items An iterable (such as an Array) whose elements will be grouped
 * @param callbackFn A function to execute for each element in the iterable. It should return a value that can get coerced into a property key (string or symbol) indicating the group of the current element
 * @returns A null-prototype object with properties for all groups, each assigned to an array containing the elements of the associated group
 */
export function ObjectGroupBy<T = any>(items: Iterable<T>, callbackFn: (element: T, index: number) => any): Record<string|symbol, T[]>{
    const obj: Record<string|symbol, T[]> = {};
    Object.setPrototypeOf(obj, null);
    let index = 0;
    for (const item of items) {
        let key = callbackFn(item, index++);
        if (typeof key !== "symbol") {
            key = String(key);
        }
        if (!obj[key]) {
            obj[key] = []
        }
        obj[key].push(item);
    }
    return obj;
}
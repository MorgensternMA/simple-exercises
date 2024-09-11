import { Conjunto } from "./Conjunto";

export class ConjuntoOrdenado<T> extends Conjunto<T> {
    private sortFunction: (a: T, b: T) => number;

    constructor(sortFunction: (a: T, b: T) => number) {
        super();
        this.sortFunction = sortFunction;
    }

    add(element: T): void {
        if (!this.has(element)) {
            this.elements.add(element);
            // Convert Set to array, sort, then convert back to Set
            const sortedArray = Array.from(this.elements).sort(this.sortFunction);
            this.elements = new Set(sortedArray);
        }
    }

    values(): T[] {
        return Array.from(this.elements);
    }
}

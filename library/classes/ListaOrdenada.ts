import { Lista } from "./Lista";

export class ListaOrdenada<T> extends Lista<T> {
    private sortFunction: (a: T, b: T) => number;

    constructor(sortFunction: (a: T, b: T) => number) {
        super();
        this.sortFunction = sortFunction;
    }

    add(element: T): void {
        super.add(element);
        this.elements.sort(this.sortFunction);
    }
}
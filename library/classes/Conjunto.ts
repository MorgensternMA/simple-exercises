import { Collection } from "../Interfaces/Collection";

export class Conjunto<T> implements Collection<T> {
    protected elements: Set<T> = new Set<T>();

    add(element: T): void {
        this.elements.add(element);
    }

    delete(element: T): boolean {
        return this.elements.delete(element);
    }

    has(element: T): boolean {
        return this.elements.has(element);
    }

    size(): number {
        return this.elements.size;
    }

    values(): T[] {
        return Array.from(this.elements);
    }
}

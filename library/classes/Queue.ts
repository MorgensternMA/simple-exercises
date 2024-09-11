import { Collection } from "../Interfaces/Collection";

export class Queue<T> implements Collection<T> {
    private elements: T[] = [];

    add(element: T): void {
        this.elements.push(element);
    }

    delete(element: T): boolean {
        const index = this.elements.indexOf(element);
        if (index > -1) {
            this.elements.splice(index, 1);
            return true;
        }
        return false;
    }

    has(element: T): boolean {
        return this.elements.includes(element);
    }

    size(): number {
        return this.elements.length;
    }

    values(): T[] {
        return [...this.elements];
    }

    enqueue(element: T): void {
        this.add(element);
    }

    dequeue(): T | undefined {
        return this.elements.shift();
    }

    peek(): T | undefined {
        return this.elements[0];
    }
}
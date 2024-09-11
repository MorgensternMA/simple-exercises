export interface Collection<T> {
    add(element: T): void;
    delete(element: T): boolean;
    has(element: T): boolean;
    size(): number;
    values(): T[];
}

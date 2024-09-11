import { IComponent } from "../interfaces/IComponent";

export class Task implements IComponent {
    constructor(private name: string) { }

    getName(): string {
        return this.name;
    }

    add(component: IComponent): void {
        throw new Error("Cannot add to a task.");
    }

    remove(component: IComponent): void {
        throw new Error("Cannot remove from a task.");
    }

    getChild(index: number): IComponent {
        throw new Error("No children in a task.");
    }
}

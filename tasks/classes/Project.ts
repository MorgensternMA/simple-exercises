import { IComponent } from "../interfaces/IComponent";

export class Project implements IComponent {
    private children: IComponent[] = [];

    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    add(component: IComponent): void {
        this.children.push(component);
    }

    remove(component: IComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
        this.children.splice(index, 1);
        }
    }

    getChild(index: number): IComponent {
        return this.children[index];
    }
}

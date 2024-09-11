export interface IComponent {
    getName(): string;
    add(component: IComponent): void;
    remove(component: IComponent): void;
    getChild(index: number): IComponent;
}

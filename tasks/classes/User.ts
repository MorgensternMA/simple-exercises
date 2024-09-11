import { Observer } from "../interfaces/IObserver";

export class User implements Observer {
    constructor(private name: string) { }

    update(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }
}
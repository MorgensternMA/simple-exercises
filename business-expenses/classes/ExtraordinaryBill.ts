import { Bill } from "./bill";

export class ExtraordinaryBill extends Bill {
    private description: string;
    private amount: number;

    constructor(description: string, amount: number) {
        super();
        this.description = description;
        this.amount = amount;
    }

    getDescription(): string {
        return `Extraordinary expense: ${this.description}`;
    }

    getTotal(): number {
        return this.amount;
    }
}

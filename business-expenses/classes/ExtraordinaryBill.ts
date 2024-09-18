import { Bill } from "./bill";

export class ExtraordinaryBill extends Bill {
    private description: string;

    constructor(description: string, amount: number) {
        super(amount);
        this.description = description;
    }

    getDescription(): string {
        return `Extraordinary expense: ${this.description}`;
    }

    getTotal(): number {
        return this.amount;
    }
}

import { Bill } from "./bill";

export class ShoppingBill extends Bill {
    private product: string;
    private amount: number;

    constructor(product: string, amount: number) {
        super();
        this.product = product;
        this.amount = amount;
    }

    getDescription(): string {
        return `Purchase of ${this.product}`;
    }

    getTotal(): number {
        return this.amount;
    }
}
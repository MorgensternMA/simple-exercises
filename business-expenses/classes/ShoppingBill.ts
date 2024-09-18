import { Bill } from "./bill";

export class ShoppingBill extends Bill {
    private product: string;

    constructor(product: string, amount: number) {
        super(amount);
        this.product = product;
    }

    getDescription(): string {
        return `Purchase of ${this.product}`;
    }

    getTotal(): number {
        return this.amount;
    }
}
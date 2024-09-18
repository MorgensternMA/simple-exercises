import { Bill } from "./bill";

export class ServiceBill extends Bill {
    private company: string;

    constructor(company: string, amount: number) {
        super(amount);
        this.company = company;
    }

    getDescription(): string {
        return `Service from ${this.company}`;
    }

    getTotal(): number {
        return this.amount;
    }
}

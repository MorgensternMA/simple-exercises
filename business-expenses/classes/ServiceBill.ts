import { Bill } from "./bill";

export class ServiceBill extends Bill {
    private company: string;
    private amount: number;

    constructor(company: string, amount: number) {
        super();
        this.company = company;
        this.amount = amount;
    }

    getDescription(): string {
        return `Service from ${this.company}`;
    }

    getTotal(): number {
        return this.amount;
    }
}

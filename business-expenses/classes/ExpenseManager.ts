import { Bill } from "./bill";

export class ExpenseManager {
    private bills: Bill[] = [];

    addBill(bill: Bill): void {
        this.bills.push(bill);
    }

    printAllExpenses(): void {
        console.log("List of Expenses:");
        this.bills.forEach(bill => {
            console.log(`${bill.getDescription()} ..............$${bill.getTotal()}`);
        });
    }
}

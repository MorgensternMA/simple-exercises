export abstract class Bill{
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    
    abstract getDescription(): string;
    abstract getTotal(): number;
}
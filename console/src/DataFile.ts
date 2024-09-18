import { Archive } from "./Archive";

export class DataFile extends Archive {
  private data: string = '';

  setData(data: string): void {
    this.data = data;
  }

  getData(): string {
    return this.data;
  }
}
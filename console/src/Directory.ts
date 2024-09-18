import { Archive } from "./Archive";

export class Directory extends Archive {
  private children: Archive[] = [];

  public add(archive: Archive): void {
    this.children.push(archive);
  }

  public remove(archive: Archive): void {
    const index = this.children.indexOf(archive);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  public getChildren(): Archive[] {
    return [...this.children];
  }

  public getChild(name: string): Archive | null {
    return this.children.find(child => child.getName() === name) ?? null;
  }
}
import readline from 'readline/promises';
import { Archive } from './Archive';

export class TerminalInterface {
  private static instance: TerminalInterface
  private archives: Archive[] = [];

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new TerminalInterface()
    }
    return this.instance
  }

  remove(name: string): void {
    const index = this.archives.findIndex(arc => arc.getName() === name);
    if (index !== -1) {
      this.archives.splice(index, 1);
      this.write(`Archive "${name}" has been removed.`);
    } else {
      this.write(`Archive "${name}" not found.`);
    }
  }

  async read(): Promise<string[]> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const answer = await rl.question(">: ")
    rl.close()
    return answer.split(' ')
  }

  async write(message: string): Promise<void> {
    message.split('\n').forEach(line => console.log(line))
  }
}
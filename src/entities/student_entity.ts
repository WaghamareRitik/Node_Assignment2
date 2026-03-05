export class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: number
  ) {}

  isPassed(): boolean {
    return this.grade >= 50;
  }
}
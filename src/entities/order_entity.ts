export class Order {
  constructor(
    public orderID: string,
    public orderBlocks: { LineNo: number }[],
  ) {}

  isValidOrder(): boolean {
    return !this.orderBlocks.some((block) => block.LineNo % 3 === 0);
  }
}

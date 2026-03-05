import { Order } from "../entities/order_entity";
import { OrderRepository } from "../repositories/order_repository";

export async function processOrder(items: any[]) {

  const validOrders = items
    .map(item => new Order(item.orderID, item.OrderBlocks))
    .filter(order => order.isValidOrder());

  const result = await Promise.all(
    validOrders.map(order =>
      OrderRepository.upsertOrder(order.orderID)
    )
  );

  return result.map(r => r.orderID);
}
import { prisma } from "../config/prisma";
import { logger } from "../utils/logger";

export const OrderRepository = {
  async upsertOrder(orderID: string) {
    logger.info(`Upserting order: ${orderID}`);

    return prisma.order.upsert({
      where: { orderID },
      update: {},
      create: { orderID },
    });
  },
};

import { NextFunction, Request, Response } from "express";
import { processOrder } from "../services/order_service";
import { logger } from "../utils/logger";

export async function createOrders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    logger.info("POST /orders endpoint called");

    const { items } = req.body;

    if (!Array.isArray(items)) {
      logger.error("Items is not an array");

      return res.status(400).json({
        success: false,
        message: "Items must be an array",
      });
    }

    logger.info(`Processing ${items.length} orders`);

    const storedOrderIDs = await processOrder(items);

    logger.info(`Stored ${storedOrderIDs.length} valid orders`);

    res.status(201).json({
      success: true,
      storedOrderIDs,
    });
  } catch (error: any) {
    logger.error(`Order creation failed: ${error.message}`);
    next(error);
  }
}
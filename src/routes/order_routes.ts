import { Router } from "express";
import { createOrders } from "../controller/order_controller";

const router = Router();

router.post("/orders", createOrders);

export default router;

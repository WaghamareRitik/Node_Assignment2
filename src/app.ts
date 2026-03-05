import express from "express";
import orderRoutes from "./routes/order_routes";
import studentRoutes from "./routes/student_routes";
import { errorHandler } from "./middleware/error_middleware";

const app = express();

app.use(express.json());
app.use("/", orderRoutes);

app.use("/", studentRoutes);

app.use(errorHandler);

export default app;

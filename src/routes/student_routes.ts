import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  processStudents,
  updateStudent,
} from "../controller/student_controller";

const router = Router();

router.post("/students/processStudents", processStudents);

router.post("/students", createStudent);

router.get("/students", getAllStudents);

router.get("/students/:id", getStudentById);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

export default router;

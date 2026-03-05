import { NextFunction, Request, Response } from "express";
import {
  filterPassedStudents,
  getStudentNames,
  sortStudentsByGrade,
  getAverageAge,
  Student,
} from "../services/student_service";
import { logger } from "../utils/logger";
import * as studentService from "../services/student_service";

export const processStudents = (req: Request, res: Response) => {
  logger.info("POST /students endpoint called");

  const students: Student[] = req.body.students;

  if (!Array.isArray(students)) {
    logger.error("Students input is not an array");

    return res.status(400).json({ message: "students must be an array" });
  }

  logger.info(`Processing ${students.length} students`);

  res.json({
    passed: filterPassedStudents(students),
    names: getStudentNames(students),
    sorted: sortStudentsByGrade(students),
    averageAge: getAverageAge(students),
  });
};

export async function createStudent(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { studentId, name, age } = req.body;
    const student = await studentService.createStudent(studentId, name, age);

    logger.info(`Student created: ${student.studentId}`);

    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllStudents(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const students = await studentService.getAllStudents();

    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    next(error);
  }
}

export async function getStudentById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = Number(req.params.id);

    const student = await studentService.getStudentById(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    next(error);
  }
}

export async function updateStudent(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const student = await studentService.updateStudent(id, name, age);

    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteStudent(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = Number(req.params.id);

    await studentService.deleteStudent(id);

    res.json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

import { StudentRepository } from "../repositories/student_repository";

export interface Student {
  name: string;
  age: number;
  grade: number;
}

export const filterPassedStudents = (students: Student[]): Student[] =>
  students.filter((student) => student.grade >= 50);

export const getStudentNames = (students: Student[]): string[] =>
  students.map((student) => student.name);

export const sortStudentsByGrade = (students: Student[]): Student[] =>
  [...students].sort((a, b) => a.grade - b.grade);

export const getAverageAge = (students: Student[]): number =>
  students.reduce((sum, student) => sum + student.age, 0) / students.length;

//<----------------------------------Student CRUD Operations----------------------------------------->


export async function createStudent(
  studentId: string,
  name: string,
  age: number,
) {
  return StudentRepository.createStudent(studentId, name, age);
}

export async function getAllStudents() {
  return StudentRepository.getAllStudents();
}

export async function updateStudent(id: number, name: string, age: number) {
  return StudentRepository.updateStudent(id, name, age);
}

export async function getStudentById(id: number) {
  return StudentRepository.getStudentById(id);
}

export async function deleteStudent(id: number) {
  return StudentRepository.deleteStudent(id);
}

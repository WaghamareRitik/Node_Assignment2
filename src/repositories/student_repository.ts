import { prisma } from "../config/prisma";

export const StudentRepository = {
  async createStudent(studentId: string, name: string, age: number) {
    return prisma.student.create({
      data: {
        studentId,
        name,
        age,
      },
    });
  },

  async getAllStudents() {
    return prisma.student.findMany();
  },

  async getStudentById(id: number) {
    return prisma.student.findUnique({
      where: {
        id,
      },
    });
  },

  async updateStudent(id: number, name: string, age: number) {
    return prisma.student.update({
      where: { id },
      data: {
        name,
        age,
      },
    });
  },

  async deleteStudent(id: number) {
    return prisma.student.delete({
      where: { id },
    });
  },
};

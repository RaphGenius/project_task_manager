import { taskStatus } from "@/models/Task";
import { z } from "zod";

const idSchema = z.object({
  id: z.coerce.number(),
});

const titleSchema = z.string().min(1);
const descriptionSchema = z.string().optional();
const statusSchema = z.enum(taskStatus);
const assignedToSchema = z.number().nullable();
const dueDateSchema = z.date().optional();

const createTaskSchema = z.object({
  title: titleSchema,
  description: descriptionSchema,
  status: statusSchema,
  assignedTo: assignedToSchema,
  dueDate: dueDateSchema,
});

const updateTaskSchema = z.object({
  title: titleSchema.optional(),
  description: descriptionSchema,
  status: statusSchema.optional(),
  assignedTo: assignedToSchema.optional(),
  dueDate: dueDateSchema,
});

export { idSchema, createTaskSchema, updateTaskSchema };

import { z } from "zod";

export const todoSchema = z.object({
  id: z.string(),
  text: z.string().min(1),
  completed: z.boolean().default(false),
  createdAt: z.date(),
});

export type Todo = z.infer<typeof todoSchema>;

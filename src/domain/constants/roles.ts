import { z } from 'zod';

export const roleSchema = z.enum(['Teacher', 'Student']);

export type Role = z.infer<typeof roleSchema>;

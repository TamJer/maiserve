'use client'

import { z } from 'zod'

const ChangePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, {
        message: 'Password is required.',
      })
      .min(8, {
        message: 'Password must be at least 8 characters.',
      })
      .max(50),

    confirmPassword: z
      .string()
      .min(1, {
        message: 'Password is required.',
      })
      .min(8, {
        message: 'Password must be at least 8 characters.',
      })
      .max(50),
    isVerified: z.boolean().optional(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      })
    }
  })

export default ChangePasswordSchema

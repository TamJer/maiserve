'use client'

import { z } from 'zod'

const ResetSchema = z.object({
  email: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
})

export default ResetSchema

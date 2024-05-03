'use client'

import { z } from 'zod'

const ResetSchema = z.object({
  email: z.string().email(),
})

export default ResetSchema

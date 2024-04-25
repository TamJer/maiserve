import { z } from 'zod'

const ChangePasswordSchema = z.object({
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
})

export default ChangePasswordSchema

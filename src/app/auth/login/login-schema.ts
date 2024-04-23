import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().min(1, 'Please enter your email address.'),
  password: z.string().min(1, 'Please enter your password.'),
})

export default LoginSchema

import LoginPage from '@/app/auth/login/page'
import { render, screen, fireEvent } from '@/test/test-utils'

it('Displays error when email is not provided', () => {
  render(<LoginPage />)
  fireEvent.click(screen.getByRole('button', { name: /login/i }))
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
})

it('Displays error when password is not provided', () => {
  render(<LoginPage />)
  fireEvent.click(screen.getByRole('button', { name: /submit/i }))
  expect(screen.getByText(/password is required/i)).toBeInTheDocument()
})

it('Displays error when email is not valid', () => {
  render(<LoginPage />)
  fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
    target: { value: 'invalid email' },
  })
  fireEvent.click(screen.getByRole('button', { name: /submit/i }))
  expect(screen.getByText(/email is not valid/i)).toBeInTheDocument()
})

it('Submits form when valid email and password are provided', () => {
  render(<LoginPage />)
  fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
    target: { value: 'test@test.com' },
  })
  fireEvent.change(screen.getByRole('textbox', { name: /password/i }), {
    target: { value: 'password' },
  })
  fireEvent.click(screen.getByRole('button', { name: /submit/i }))
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})

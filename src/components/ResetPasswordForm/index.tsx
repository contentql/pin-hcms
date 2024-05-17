'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import FormWrapper from '@/components/FormWrapper'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { generateResetPasswordToken, resetPassword } from './actions'

const generateTokenSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  token: z.string(),
})

// Form component to request a password reset token
export function GenerateResetTokenForm() {
  const form = useForm<z.infer<typeof generateTokenSchema>>({
    resolver: zodResolver(generateTokenSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  })
  const {
    handleSubmit,
    formState: { errors },
  } = form
  const [message, setMessage] = useState<string | null>(null)
  const [isSubmitting, startTransition] = useTransition()

  const onSubmit = async (data: z.infer<typeof generateTokenSchema>) => {
    startTransition(async () => {
      const response = await generateResetPasswordToken(data)
      if (!response.success) {
        form.setError('email', {
          type: 'manual',
          message: response.error.message,
        })
        setMessage(null)
      } else {
        setMessage(
          "Reset link sent to your email. Don't forget to check your spam inbox!",
        )
      }
    })
  }

  return (
    <FormWrapper>
      <h2 className='mb-3 text-center text-2xl font-bold'>Password Reset</h2>
      <p className='mb-5 text-center text-zinc-500'>
        Please enter your email address.
      </p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          {message && <Alert color='green'>{message}</Alert>}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='email'>E-mail</Label>
                <FormControl>
                  <Input
                    type='email'
                    autoComplete='email'
                    placeholder='john.doe@example.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {errors.email && errors.email.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>
      </Form>
    </FormWrapper>
  )
}

// Form component to reset the password using the provided token
export function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onBlur',
    defaultValues: { token, password: '' },
  })
  const {
    handleSubmit,
    formState: { errors },
  } = form
  const [message, setMessage] = useState<string | null>(null)
  const [isSubmitting, startTransition] = useTransition()

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    startTransition(async () => {
      const result = await resetPassword({ ...data, redirectTo: '/profile' })
      if (!result.success) {
        form.setError('password', {
          type: 'manual',
          message:
            result?.error?.message ||
            'Failed to reset password. Please try again.',
        })
        setMessage(null)
      } else {
        setMessage('Password reset successfully. Redirecting...')
        setTimeout(() => router.push('/profile'), 2000)
      }
    })
  }

  return (
    <FormWrapper>
      <h2 className='mb-3 text-center text-2xl font-bold'>Almost there!</h2>
      <p className='mb-5 text-center text-zinc-500'>
        Please enter your new password.
      </p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          {message && <Alert color='green'>{message}</Alert>}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='password'>Password</Label>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='● ● ● ● ● ● ● ●'
                    autoComplete='new-password'
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {errors.password && errors.password.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Reset Password'}
          </Button>
        </form>
      </Form>
    </FormWrapper>
  )
}

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const changeBasedOnENV = (env: any) => {
  if (process.env.NODE_ENV === 'development') {
    return `http://${env}`
  }
  if (process.env.NODE_ENV === 'production') return `https://${env}`

  return `http://${env}`
}

export const env = createEnv({
  server: {
    DATABASE_URI: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    PAYLOAD_URL: z.string().url(),
    S3_ENDPOINT: z.string().min(1),
    S3_ACCESS_KEY_ID: z.string().min(1),
    S3_SECRET_ACCESS_KEY: z.string().min(1),
    S3_BUCKET: z.string().min(1),
    S3_REGION: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_SENDER_EMAIL: z.string().email(),
    RESEND_SENDER_NAME: z.string().min(1),
    PAYLOAD_PUBLIC_DRAFT_SECRET: z.string().min(1),
    REVALIDATION_KEY: z.string().min(1),
    NEXT_PRIVATE_REVALIDATION_KEY: z.string().min(1),
    NEXT_PRIVATE_DRAFT_SECRET: z.string().min(1),
    AUTH_SECRET: z.string(),
    AUTH_TRUST_HOST: z.boolean().default(true),
    AUTH_VERPOSE: z.boolean(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
    OPENAPI_KEY: z.string(),
    SUBSCRIPTION_PLAN: z.string(),
  },
  client: {
    NEXT_PUBLIC_IS_LIVE: z.boolean().default(false),
    NEXT_PUBLIC_PUBLIC_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    NEXT_PUBLIC_PUBLIC_URL: changeBasedOnENV(
      process.env.NEXT_PUBLIC_PUBLIC_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL,
    ),
    PAYLOAD_URL: changeBasedOnENV(
      process.env.PAYLOAD_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL,
    ),
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_SENDER_EMAIL: process.env.RESEND_SENDER_EMAIL,
    RESEND_SENDER_NAME: process.env.RESEND_SENDER_NAME,
    NEXT_PUBLIC_IS_LIVE: false,
    PAYLOAD_PUBLIC_DRAFT_SECRET: process.env.PAYLOAD_PUBLIC_DRAFT_SECRET,
    NEXT_PRIVATE_DRAFT_SECRET: process.env.NEXT_PRIVATE_DRAFT_SECRET,
    REVALIDATION_KEY: process.env.REVALIDATION_KEY,
    NEXT_PRIVATE_REVALIDATION_KEY: process.env.NEXT_PRIVATE_REVALIDATION_KEY,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_TRUST_HOST: true,
    AUTH_VERPOSE: true,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    OPENAPI_KEY: process.env.OPENAPI_KEY,
    SUBSCRIPTION_PLAN: process.env.SUBSCRIPTION_PLAN,
  },
})

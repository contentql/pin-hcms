import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URI: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
  },
  client: {
    // NEXT_PUBLIC_CONVEX_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  },
})

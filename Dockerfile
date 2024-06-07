FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .



# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

ARG DATABASE_URI
ARG PAYLOAD_SECRET
ARG NEXT_PUBLIC_PUBLIC_URL
ARG PAYLOAD_URL
ARG S3_ENDPOINT
ARG S3_ACCESS_KEY_ID
ARG S3_SECRET_ACCESS_KEY
ARG S3_BUCKET
ARG S3_REGION
ARG RESEND_API_KEY
ARG RESEND_SENDER_EMAIL
ARG RESEND_SENDER_NAME
ARG NEXT_PUBLIC_IS_LIVE
ARG PAYLOAD_PUBLIC_DRAFT_SECRET
ARG NEXT_PRIVATE_DRAFT_SECRET
ARG REVALIDATION_KEY
ARG NEXT_PRIVATE_REVALIDATION_KEY
ARG AUTH_SECRET
ARG AUTH_TRUST_HOST
ARG AUTH_VERPOSE
ARG AUTH_GITHUB_ID
ARG AUTH_GITHUB_SECRET
ARG OPENAPI_KEY
ARG SUBSCRIPTION_PLAN

ENV DATABASE_URI=$DATABASE_URI
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV NEXT_PUBLIC_PUBLIC_URL=$NEXT_PUBLIC_PUBLIC_URL
ENV PAYLOAD_URL=$PAYLOAD_URL
ENV S3_ENDPOINT=$S3_ENDPOINT
ENV S3_ACCESS_KEY_ID=$S3_ACCESS_KEY_ID
ENV S3_SECRET_ACCESS_KEY=$S3_SECRET_ACCESS_KEY
ENV S3_BUCKET=$S3_BUCKET
ENV S3_REGION=$S3_REGION
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV RESEND_SENDER_EMAIL=$RESEND_SENDER_EMAIL
ENV RESEND_SENDER_NAME=$RESEND_SENDER_NAME
ENV NEXT_PUBLIC_IS_LIVE=$NEXT_PUBLIC_IS_LIVE
ENV PAYLOAD_PUBLIC_DRAFT_SECRET=$PAYLOAD_PUBLIC_DRAFT_SECRET
ENV NEXT_PRIVATE_DRAFT_SECRET=$NEXT_PRIVATE_DRAFT_SECRET
ENV REVALIDATION_KEY=$REVALIDATION_KEY
ENV NEXT_PRIVATE_REVALIDATION_KEY=$NEXT_PRIVATE_REVALIDATION_KEY
ENV AUTH_SECRET=$AUTH_SECRET
ENV AUTH_TRUST_HOST=$AUTH_TRUST_HOST
ENV AUTH_VERPOSE=$AUTH_VERPOSE
ENV AUTH_GITHUB_ID=$AUTH_GITHUB_ID
ENV AUTH_GITHUB_SECRET=$AUTH_GITHUB_SECRET
ENV OPENAPI_KEY=$OPENAPI_KEY
ENV SUBSCRIPTION_PLAN=$SUBSCRIPTION_PLAN

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/media ./media

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js

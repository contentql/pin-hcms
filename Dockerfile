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
ENV DATABASE_URI=mongodb://mongo:DfoMBhRSoXvRXfStwFHDGIZlSbJIQavI@monorail.proxy.rlwy.net:51034
# DATABASE_URI=mongodb://host.docker.internal/pin-hcms
ENV PAYLOAD_SECRET=2a023d381a9090befb07e27d
ENV NEXT_PUBLIC_PUBLIC_URL=http://localhost:3000
ENV PAYLOAD_URL=http://localhost:3000

# storage
ENV S3_ENDPOINT=https://649f07b28a7583914dfd1580a91610df.r2.cloudflarestorage.com/pin-hcms
ENV S3_ACCESS_KEY_ID=a6e207ded76b2863bf8d881c8b3ec881
ENV S3_SECRET_ACCESS_KEY=08293b8176f1a15e3cbebc823ec7cc238ce1714ccb67df0333215e8b64b19103
ENV S3_BUCKET=pin-hcms
ENV S3_REGION=us-east-1

#email
ENV RESEND_API_KEY=re_i4bXtBCr_G4LVrvVvYTmYVFcLRPhmW5AP
ENV RESEND_SENDER_EMAIL=akhil@resonateaes.com
ENV RESEND_SENDER_NAME=Akhil

ENV NEXT_PUBLIC_IS_LIVE=false

# Used to preview drafts
ENV PAYLOAD_PUBLIC_DRAFT_SECRET=demo-draft-secret
ENV NEXT_PRIVATE_DRAFT_SECRET=demo-draft-secret

# Used to revalidate static pages
ENV REVALIDATION_KEY=demo-revalation-key
ENV NEXT_PRIVATE_REVALIDATION_KEY=demo-revalation-key

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

# Adding a New Environment Variable

## 1. Update the `.env` File

Add the new variable(s) to the `.env` file. If it is related to a new service,
plugin, or any other new feature, place it at the end of the file with a
specific comment.

### Example `.env` File:

```env
NEXT_PUBLIC_PUBLIC_URL=***
PAYLOAD_URL=***

DATABASE_URI=***
PAYLOAD_SECRET=***

# Storage
S3_ENDPOINT=***
S3_ACCESS_KEY_ID=***
S3_SECRET_ACCESS_KEY=***
S3_BUCKET=***
S3_REGION=***

# Add new variables here
NEW_SERVER_VARIABLE=***
NEXT_PUBLIC_NEW_CLIENT_VARIABLE=***
```

## 2. Update the `.env.example` File

Copy the new variable(s) to the `.env.example` file, removing sensitive values.

### Example `.env.example` File:

```env
DATABASE_URI=
PAYLOAD_SECRET=

NEXT_PUBLIC_PUBLIC_URL=
PAYLOAD_URL=

# Storage
S3_ENDPOINT=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_BUCKET=
S3_REGION=

# Add new variables here
NEW_SERVER_VARIABLE=
NEXT_PUBLIC_NEW_CLIENT_VARIABLE=
```

## 3. Update the `env.ts` File

Add the new variable(s) to the `runtimeEnv` object in `env.ts`, specifying
whether they are server-side or client-side variables based on their usage.

**Note:** All variables starting with `NEXT_PUBLIC` belong to the client-side
only.

### Example `env.ts` File:

```typescript
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

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
    // Add new variables here
    NEW_SERVER_VARIABLE: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_IS_LIVE: z.boolean().default(false),
    NEXT_PUBLIC_PUBLIC_URL: z.string().url(),
    // Add new variables here
    NEXT_PUBLIC_NEW_CLIENT_VARIABLE: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
    PAYLOAD_URL: process.env.PAYLOAD_URL,
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    // Add new variables here
    NEW_SERVER_VARIABLE: process.env.NEW_SERVER_VARIABLE,
    NEXT_PUBLIC_NEW_CLIENT_VARIABLE:
      process.env.NEXT_PUBLIC_NEW_CLIENT_VARIABLE,
  },
})
```

## 4. Update the `docker-publish.yml` File

Add the new variable(s) to the `build-args` section of the `docker-publish.yml`
file located in GitHub workflows.

### Example `docker-publish.yml` File:

```yaml
- name: Build and push Docker image
  id: build-and-push
  uses: docker/build-push-action@0565240e2d4ab88bba5387d719585280857ece09
  with:
    push: ${{ github.event_name != 'pull_request' }}
    tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
    platforms: linux/amd64
    build-args: |
      DATABASE_URI=${{ secrets.DATABASE_URI }}
      PAYLOAD_SECRET=${{ secrets.PAYLOAD_SECRET }}
      NEXT_PUBLIC_PUBLIC_URL=${{ secrets.NEXT_PUBLIC_PUBLIC_URL }}
      PAYLOAD_URL=${{ secrets.PAYLOAD_URL }}
      S3_ENDPOINT=${{ secrets.S3_ENDPOINT }}
      S3_ACCESS_KEY_ID=${{ secrets.S3_ACCESS_KEY_ID }}
      S3_SECRET_ACCESS_KEY=${{ secrets.S3_SECRET_ACCESS_KEY }}
      S3_BUCKET=${{ secrets.S3_BUCKET }}
      S3_REGION=${{ secrets.S3_REGION }}
      # Add new variables here
      NEW_SERVER_VARIABLE=${{ secrets.NEW_SERVER_VARIABLE }}
      NEXT_PUBLIC_NEW_CLIENT_VARIABLE=${{ secrets.NEXT_PUBLIC_NEW_CLIENT_VARIABLE }}
```

## 5. Update the `Dockerfile`

Add the new variable(s) at two places in the Dockerfile: by `ARG` to pass the
variables during build time and by `ENV` to set them as environment variables
for the runtime.

### Example `Dockerfile`:

```Dockerfile
ARG DATABASE_URI
ARG PAYLOAD_SECRET
ARG NEXT_PUBLIC_PUBLIC_URL
ARG PAYLOAD_URL
ARG S3_ENDPOINT
ARG S3_ACCESS_KEY_ID
ARG S3_SECRET_ACCESS_KEY
ARG S3_BUCKET
ARG S3_REGION
# Add new variables here
ARG NEW_SERVER_VARIABLE
ARG NEXT_PUBLIC_NEW_CLIENT_VARIABLE

ENV DATABASE_URI=$DATABASE_URI
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV NEXT_PUBLIC_PUBLIC_URL=$NEXT_PUBLIC_PUBLIC_URL
ENV PAYLOAD_URL=$PAYLOAD_URL
ENV S3_ENDPOINT=$S3_ENDPOINT
ENV S3_ACCESS_KEY_ID=$S3_ACCESS_KEY_ID
ENV S3_SECRET_ACCESS_KEY=$S3_SECRET_ACCESS_KEY
ENV S3_BUCKET=$S3_BUCKET
ENV S3_REGION=$S3_REGION
# Add new variables here
ENV NEW_SERVER_VARIABLE=$NEW_SERVER_VARIABLE
ENV NEXT_PUBLIC_NEW_CLIENT_VARIABLE=$NEXT_PUBLIC_NEW_CLIENT_VARIABLE
```

**Reasons for ARG and ENV in Dockerfile:**

- **ARG**: Used to pass the variables during the build time.
- **ENV**: Used to set environment variables for the runtime.

## 6. Notify the Product Team

Post the new variable(s) in the product team channel, mentioning Akhil and
Manoj, to update them in GitHub secrets, Railway, and Railway API calls while
deploying the template.

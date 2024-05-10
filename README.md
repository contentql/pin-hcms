# Building docker image

> After every push to main, we need to update the docker image

`docker build -t ghcr.io/contentql/pin-hcms:latest . --platform linux/amd64`
`docker push ghcr.io/contentql/pin-hcms:latest`

# Testing Docker Production version

`sudo docker pull ghcr.io/contentql/pin-hcms:latest`
`sudo docker run --network="host" -e DATABASE_URI=mongodb://127.0.0.1/pin-hcms ghcr.io/contentql/pin-hcms:latest`

# Getting Started

1. `pnpm pull`
2. `pnpm i`
3. `pnpm generate:types`
4. `pnpm dev`

# Required Collections

1. pages
2. blogs

# Basic Idea

Both the collections we create should have the idea of:

1. Blocks in every page and blog
2. Dynamic Generation using the render which we already use in `pin-contentql`
3. Clear documentation on how to create blocks in frontend and backend.

# Exceptions

`NEXT_PUBLIC_PUBLIC_URL` env variable should not have `/` at the ends

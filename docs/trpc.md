# Required Installation

These are the required packages for our `trpc` setup

```json
  "@tanstack/react-query": "latest",
  "@tanstack/react-query-devtools": "latest",
  "@trpc/client": "next",
  "@trpc/next": "next",
  "@trpc/react-query": "next",
  "@trpc/server": "next"
```

# Other important aspects

1. Check our the `trpc` folder that exists in `src` folder and `api` folder
2. All the routes are to the created in the `trpc/router`
3. Use the `serverClient` for fetching data on server

# How to use trpc Properly

1. Anything related to trpc router should used by `getPayload`
2. If it is Admin Panel related code, like `custom components` or `plugins` use
   `getPayloadHMR`

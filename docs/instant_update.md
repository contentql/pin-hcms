## Optimistic updates using react query

### Most of the optimistic functionality code present in onMutate function.

#### onMutate: (variables: TVariables) => Promise<TContext | void> | TContext | void

- This function will fire before the mutation function is fired and is passed
  the same variables the mutation function would receive Useful to perform
  optimistic updates to a resource in hopes that the mutation succeeds.

### 1. Get Current Data with getQueryData

- Purpose: Retrieve the current state of the data from the cache before making
  optimistic updates.

- Implementation: Use the getQueryData method to get the current data from the
  query cache.

```tsx
const previousPosts = queryClient.getQueryData('posts')
```

### 2. Set Optimistic Data with setQueryData

- Purpose: Immediately update the UI with the new data before receiving a
  response from the server.

- Implementation: Use the setQueryData method to optimistically update the
  cache.

```tsx
queryClient.setQueryData('posts', old => [
  ...old,
  { id: Date.now(), ...newPost },
])
```

### 3. Rollback on Error

- Purpose: Revert to the previous state if the mutation fails.
- Implementation: Use the onError callback to reset the data to its previous
  state.

```tsx
onError: (err, newPost, context) => {
  queryClient.setQueryData('posts', context.previousPosts)
}
```

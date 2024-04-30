'use client'

import { trpc } from '@/trpc/client'

const page = () => {
  const { data: testData } = trpc.test.useQuery()
  const { data: todoData } = trpc.todo.getTodos.useQuery()

  return (
    <div>
      {JSON.stringify(testData)}
      {JSON.stringify(todoData)}
    </div>
  )
}

export default page

'use client'

import { trpc } from '@/trpc/client'

const page = ({ initialData }: any) => {
  const { data: testData } = trpc.test.useQuery()
  const { data: todoData } = trpc.todo.getTodos.useQuery(undefined, {
    initialData,
  })

  return (
    <div>
      <div>TestData: {JSON.stringify(testData)}</div>
      <div>TodoData: {JSON.stringify(todoData)}</div>
    </div>
  )
}

export default page

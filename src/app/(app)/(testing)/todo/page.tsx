import { serverClient } from '@/trpc/serverClient'

import TodoList from './_components/TodoList'

const TodoPage = async () => {
  const todos = await serverClient.todo.getTodos()

  return (
    <div>
      <TodoList initialData={todos} />
    </div>
  )
}

export default TodoPage

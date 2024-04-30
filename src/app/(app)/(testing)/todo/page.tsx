import { serverClient } from '@/trpc/serverClient'

import TodoList from './_components/TodoList'

const TodoPage = async () => {
  const todos = await serverClient.todo.getTodos()

  console.log(todos, 'from server')
  return (
    <div>
      <TodoList />
      <div>hello</div>
    </div>
  )
}

export default TodoPage

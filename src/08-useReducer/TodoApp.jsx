import { TodoList, FormAdd } from '.';
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();
 
  return (
    <>
      <h1>Todo App</h1>
      <h3>Tareas: { todosCount }</h3>
      <h3>Tareas sin completar: { pendingTodosCount }</h3>
      <hr />

      <div className="row">
        <div className="col-7 list-group">
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <FormAdd newTodo={ handleNewTodo } />
        </div>
      </div>

    </>
  )
}

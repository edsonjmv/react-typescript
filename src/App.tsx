import { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const onRemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler} />
    </div>
  );
}

export default App;

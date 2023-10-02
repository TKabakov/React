import { useState } from 'react';
import AddTodo from './ArrayComponents/AddToDo.js';
import TaskList from './ArrayComponents/AddTask.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );
  const [title, setTitle] = useState('');

  function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
       id: nextId++,
      title: title,
      done: false       
      }
    ]);
  }
  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t =>{
      if (t.id === nextTodo.id){
        return {
          ...p,
          title: nextTodo.title,
          done: nextTodo.done
        }
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos([
      ...todos.slice(0, todoId - 1),
      {id: todoId ++, title: title }
    ]);
    setTitle('');
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

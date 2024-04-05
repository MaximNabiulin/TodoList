import { useEffect, useState } from 'react';
import './App.css';

import { LocalKeyValue } from './utils/LocalKeyValue';
import { ITodoItem } from './interfaces';

import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';

const TODO_LOCAL_STORAGE_KEY = 'todos';

const todoLocalKeyValue = new LocalKeyValue<ITodoItem[]>(TODO_LOCAL_STORAGE_KEY);

const App = () => {
  const [todos, setTodos] = useState(todoLocalKeyValue.get() || []);
  const [currentTodo, setCurrentTodo] = useState<Partial<ITodoItem>>({});

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === TODO_LOCAL_STORAGE_KEY) {
        setTodos(todoLocalKeyValue.get() || []);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, []);

  // NOTE: Функционал редактирования задач
  function handleEditButtonClick(id: ITodoItem['id']) {
    const todo = todos.find((todo) => todo.id === id);
    setCurrentTodo({ ...todo });
  }

  function handleEditSubmit() {
    setCurrentTodo({});
  }

  // NOTE: Возвращаем разметку
  return (
    <div className="App">
      <TodoEditor
          item={currentTodo}
          onSubmit={handleEditSubmit}
        />
      <TodoList
        todos={todos}
        onEditButtonClick={handleEditButtonClick}
      />
    </div>
  );
};

export default App;

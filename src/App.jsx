import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [todoText, setTodoText] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  // NOTE: Обработчики добавления, отметки о выполнении и удаления задач
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString,
          text: todoText.trim(),
          complited: false,
        }
      ]);
    }
    setTodoText("");
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        }
      })
    )
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  // NOTE: Функционал редактирования задач
  function handleEditButtonClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  };

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  function handleEditSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  // NOTE: Возвращаем разметку
  return (
    <div className="App">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">Edit todo: </label>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form onSubmit={handleAddTodo}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todoText}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' checked={todo.complited} onChange={() => toggleTodoComplete(todo.id)} />
            {todo.text}
            <button onClick={() => handleEditButtonClick(todo)} >Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

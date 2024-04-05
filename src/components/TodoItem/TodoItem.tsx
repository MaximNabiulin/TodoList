import { type FC } from 'react';

import { ITodoItem } from '../../interfaces';
import { TodoService } from '../../TodoService';

import './TodoItem.css';

interface TodoProps {
  todo: ITodoItem,
  onEditButtonClick: () => void,
}

const todoService = new TodoService();

const TodoItem: FC<TodoProps> = (props) => {
  const { todo } = props;

  const handleCompleteCheckBoxClick = () => {
    todoService.update({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleDeleteButtonClick = () => {
    todoService.remove(todo.id);
  };

  const handleEditButtonClick = () => {
    props.onEditButtonClick();
  };

  const todoItemTextClassName = todo.completed? 'todo-item__text todo-item__text_completed' : 'todo-item__text';

  return (
    <li className='todo-item'>
      <input
        type="checkbox"
        className='todo-item__checkbox'
        checked={todo.completed}
        onChange={handleCompleteCheckBoxClick}
      />
      <p className={todoItemTextClassName}>
        {todo.text}
      </p>
      <button
      type="button"
      className='todo-form__button todo-item__edit-button'
      onClick={handleEditButtonClick}
      >
        Edit
      </button>
      <button
      type="button"
      className='todo-form__button todo-item__delete-button'
      onClick={handleDeleteButtonClick}
      >
        {/* Delete */}
        &times;
      </button>
    </li>
  );
};

export default TodoItem;

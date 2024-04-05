import { type FC, useState, useEffect } from 'react';
import { ITodoItem } from '../../interfaces';
import { TodoService } from '../../TodoService';

import './TodoEditor.css';

interface FormProps {
  item: Partial<ITodoItem>;
  onSubmit: () => void;
}

const isExistingTodo =
  (todo: Partial<ITodoItem>): todo is ITodoItem => !!todo.id;

const todoService = new TodoService();

const TodoEditor: FC<FormProps> = (props) => {
  const {
    item,
    // onChange,
    onSubmit,
  } = props;
  const [todoText, setTodoText] = useState(item.text);

  const formTitle =props.item.id ? 'Edit Todo' : 'Add Todo';
  const buttonTitle =props.item.id ? 'Update' : 'Add';
  const cancelButtonClassName =
  props.item.id
  ? 'todo-form__cancel-button'
  : 'todo-form__hidden-button';

  useEffect(() => {
    setTodoText(props.item.text);
  }, [props.item]);

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = () => {
    if (isExistingTodo(item)) {
      todoService.update({
        ...item,
        text: todoText,
      });
    } else {
      todoService.add({
        text: todoText,
      });
    }
    onSubmit();
  };

  const handleCancelButtonClick = () => {
    onSubmit();
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2 className="todo-form__title">To Do List</h2>
      <div className="todo-form__input-container">
        <label className="todo-form__input-label">
          {`${formTitle}: `}
          <input
            type="text"
            placeholder='to do'
            className='todo-form__input'
            defaultValue={todoText}
            onChange={handleInputChange}
          />
        </label>
        <div className="todo-form__buttons">
          <button
            type="submit"
            className='todo-form__button todo-form__submit-button'
          >
            {buttonTitle}
          </button>
          <button
            type="button"
            onClick={handleCancelButtonClick}
            className={`todo-form__button ${cancelButtonClassName}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoEditor;

import { type FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

import { ITodoItem } from '../../interfaces';

interface ITodoListProps {
  todos: ITodoItem[],
  onEditButtonClick: (id: ITodoItem['id']) => void,
}

const TodoList: FC<ITodoListProps> = (props) => {
  const handleEditButtonClick = (id: ITodoItem['id']) => {
    props.onEditButtonClick(id);
  }

  return (
    <ul className='todo-list'>
      {
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditButtonClick={handleEditButtonClick.bind(null, todo.id)}
            // {...todo}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;

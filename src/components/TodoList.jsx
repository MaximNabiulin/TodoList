import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos,
    toComplete,
    toEdit,
    toDelete
  } = props;

  return (
    <ul>
      {
        todos.map(todo => <TodoItem
          key={todo.id}
          toComplete={toComplete}
          toEdit={toEdit}
          toDelete={toDelete}
          {...todo}
        />)
      }
    </ul>
  )
};

export default TodoList;

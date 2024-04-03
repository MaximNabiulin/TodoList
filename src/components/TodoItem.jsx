const TodoItem = (props) => {
  const {
    todo,
    toComplete,
    toEdit,
    toDelete
  } = props;

  return (
    <li>
      <input type="checkbox" checked={todo.complited} onChange={() => toComplete(todo.id)} />
      {todo.text}
      <button onClick={() => toEdit(todo)} >Edit</button>
      <button onClick={() => toDelete(todo.id)} >Delete</button>
    </li>
  );
};

export default TodoItem;

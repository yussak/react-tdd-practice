const List = ({ TodoList }) => {
  // console.log("todo",TodoList)

  return (
    <ul>
      {TodoList && TodoList.length > 0 ? (
        TodoList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}: {todo.title}
            </li>
          );
        })
      ) : (
        <p>Todoがありません</p>
      )}
    </ul>
  );
};

export default List;

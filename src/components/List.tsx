const List = ({ TodoList }) => {
  // console.log("todo",TodoList)

  return (
    <div>
      {TodoList && TodoList.length > 0 ? (
        TodoList.map((todo) => {
          return (
            // 減らしたい
            <p key={todo.id} data-id={todo.id} role="listitem">
              {todo.id}: {todo.title}
            </p>
          );
        })
      ) : (
        <p>Todoがありません</p>
      )}
    </div>
  );
};

export default List;

const List = ({ TodoList }) => {
  // console.log("todo",TodoList)

  return (
    <div>
      {TodoList && TodoList.length > 0 ? (
        TodoList.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })
      ) : (
        <p>Todoがありません</p>
      )}
    </div>
  );
};

export default List;

const List = ({ TodoList }) => {
// console.log("todo",TodoList)

   return (
    <div>
      {TodoList.map((todo) => {
        return (
          <p key={todo.id}>{todo.title}</p>
        )
      })}
    </div>
   )
}

export default List;
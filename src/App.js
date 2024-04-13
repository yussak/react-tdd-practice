import './App.css';

function App({TodoList}) {
console.log("todo",TodoList)
  return (
    <div className='App'>
      <p>todo追加</p>
      {TodoList.map((todo) => {
        return (
          <p key={todo.id}>{todo.title}</p>
        )
      })}
    </div>
  );
}


export default App;

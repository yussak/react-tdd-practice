import './App.css';

function App() {
const TodoList = [
  { id: 1, title: 'todo1' },
  { id: 2, title: 'todo2' },
  // { id: 3, title: 'todo3' },
]

console.log("todo",TodoList)
  return (
    <div className='App'>
      <p>todo追加</p>
      {TodoList.map((todo) => {
        return (
          <p>{todo.title}</p>
        )
      })}
    </div>
  );
}

export default App;

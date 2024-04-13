import './App.css';
import List from './components/List.tsx';

const TodoList = [
  { id: 1, title: 'todo1' },
  { id: 2, title: 'todo2' },
]
function App() {
  return (
    <div className='App'>
      <p>todo追加</p>
      <List TodoList={TodoList}/>
    </div>
  );
}


export default App;

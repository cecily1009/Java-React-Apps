
import './App.css';
import {CreateTodo} from './Components/CreateTodo';
import {Counter} from './Components/Counter/Counter';
function App() {
  return (
    <div className="App">
      <h1>ToDoList App</h1>
      <CreateTodo />
      <Counter />
    </div>
    
  );
}

export default App;

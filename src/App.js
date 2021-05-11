import './App.css';
import ToDoBar from './components/ToDoBar/ToDoBar';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoBar />
      <ToDoList />
    </div>
  );
}

export default App;

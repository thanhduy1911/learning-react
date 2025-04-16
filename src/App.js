import logo from "./logo.svg";
import "./App.css";
import TodoRowItem from "./components/TodoRowItem"; 
import TodoTable from "./components/TodoTable";

function App() {

  const todos = [
    {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDesc: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDesc: 'Make dinner', rowAssigned: 'User One'},
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Duy Todo's
          </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;

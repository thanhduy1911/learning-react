import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoRowItem from "./components/TodoRowItem";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddtodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDesc: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDesc: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDesc: "Make dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDesc: "Charge phone battery", rowAssigned: "User One" },
  ]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDesc: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  const delTodo = (deleteTodowRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodowRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Duy Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} delTodo={delTodo} />
          <button
            onClick={() => setShowAddTodoForm(!showAddtodoForm)}
            className="btn btn-primary"
          >
            {showAddtodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddtodoForm && <NewTodoForm addToDo={addToDo} />}
        </div>
      </div>
    </div>
  );
}

export default App;

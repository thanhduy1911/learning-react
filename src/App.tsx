import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showAddtodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User One" },
  ]);

  const addToDo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  const delTodo = (deleteTodowRowNumber: number) => {
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

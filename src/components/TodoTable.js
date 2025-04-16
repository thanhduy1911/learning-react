import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        <TodoRowItem
          rowNumber={props.todos[0].rowNumber}
          rowDesc={props.todos[0].rowDesc}
          rowAssigned={props.todos[0].rowAssigned}
        />
        <TodoRowItem
          rowNumber={props.todos[1].rowNumber}
          rowDesc={props.todos[1].rowDesc}
          rowAssigned={props.todos[1].rowAssigned}
        />
        <TodoRowItem
          rowNumber={props.todos[2].rowNumber}
          rowDesc={props.todos[2].rowDesc}
          rowAssigned={props.todos[2].rowAssigned}
        />
      </tbody>
    </table>
  );
}

export default TodoTable;

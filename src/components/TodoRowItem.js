function TodoRowItem(props) {
  return (
    <tr onClick={() => props.delTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDesc}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;

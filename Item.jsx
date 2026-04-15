function Item({ item, index, handleDelete }) {
  return (
    <li>
      {item}
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
}
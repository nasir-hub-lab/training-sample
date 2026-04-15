import React, { useState } from "react";

function Item({ item, index, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item);

  function handleSave() {
    handleEdit(index, editValue);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          {item}
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default Item;
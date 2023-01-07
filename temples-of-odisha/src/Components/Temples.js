import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Temples({ temples, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(temples.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (temples.complete === true) {
      setNewTitle(temples.title);
    } else {
      temples.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: temples.completed && "line-through" }}
        type="text"
        value={temples.title === "" ? newTitle : temples.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(temples)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(temples, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(temples.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
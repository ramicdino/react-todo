import { FaRegTimesCircle } from "react-icons/fa";

function Todo({ todo, onDelete, onSetReminder }) {
  return (
    <div
      onDoubleClick={() => onSetReminder(todo.id)}
      className={`todo ${todo.reminder && "reminder"}`}
    >
      <div className="todo-info">
        <h3>{todo.text}</h3>
        <small>{todo.date}</small>
      </div>
      <button onClick={() => onDelete(todo.id)}>
        <FaRegTimesCircle />
      </button>
    </div>
  );
}

export default Todo;

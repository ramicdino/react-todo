import { useState } from "react";

function AddTodo({ onAdd }) {
  //State
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  //Handler
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return alert("Fill the task input");
    if (!date) return alert("Please enter date");

    onAdd({ text, date, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Insert task here.."
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <div className="form-bottom">
        <input
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
          type="checkbox"
        />
        <button>Add new todo</button>
      </div>
    </form>
  );
}

export default AddTodo;

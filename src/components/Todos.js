import Todo from "./Todo";

const Todos = ({ todos, onDelete, onSetReminder }) => {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onSetReminder={onSetReminder}
        />
      ))}
    </div>
  );
};

export default Todos;

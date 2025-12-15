import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import "./TodoList.css";

const TodoList = ({ todos, fetchTodos }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const addTodo = async () => {
    if (!title) return;
    await API.post("/todos", { title });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await API.delete(`/todos/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await API.put(`/todos/toggle/${id}`);
    fetchTodos();
  };

  return (
    <div className="todo-container">


      <div className="add-todo">
        <input
          className="todo-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Todo"
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>


      {todos.length === 0 && (
        <p className="empty-text">No Tasks added</p>
      )}

      {todos.map((item) => (
        <div className="todo-item" key={item._id}>

          <span
            className={`todo-text ${item.completed ? "todo-completed" : ""}`}
          >
            {item.title}
          </span>

          <div className="todo-actions">
             <button
              className="todo-btn btn-edit"
              onClick={() => navigate(`/update/${item._id}`)}
            >
              Update
            </button>
            <button
              className={`todo-btn ${
                item.completed ? "btn-complete" : "btn-pending"
              }`}
              onClick={() => toggleTodo(item._id)}
            >
              {item.completed ? "Completed" : "Mark Complete"}
            </button>

            <button
              className="todo-btn btn-delete"
              onClick={() => deleteTodo(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;



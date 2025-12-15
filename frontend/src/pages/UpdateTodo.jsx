import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../utils/api";
import "./UpdateTodo.css";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await API.get("/todos");
      const todo = res.data.todos.find(t => t._id === id);
      if (todo) {
        setTitle(todo.title);
      }
    };
    fetchTodo();
  }, [id]);

  const updateTodo = async () => {
    await API.put(`/todos/${id}`, { title });
    navigate("/");
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Todo</h2>

      <input
        className="update-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="update-btn" onClick={updateTodo}>
        Save
      </button>
    </div>
  );
};

export default UpdateTodo;


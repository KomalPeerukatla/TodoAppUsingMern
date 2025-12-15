import { useEffect, useState } from "react";
import API from "../utils/api";
import "./PendingTasks.css";

const PendingTasks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchPendingTodos = async () => {
      try {
        const res = await API.get("/todos");
        const pending = res.data.todos.filter(
          (item) => !item.completed
        );
        setTodos(pending);
      } catch (error) {
        console.error("Error fetching pending tasks:", error);
      }
    };

    fetchPendingTodos();
  }, []);

  return (
    <div className="pending-container">
      <h2 className="pending-title">Pending Tasks</h2>

      {todos.length === 0 && (
        <p className="pending-empty">No pending tasks</p>
      )}

      <div className="pending-list">
        {todos.map((item) => (
          <div className="pending-item" key={item._id}>
            <span className="pending-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingTasks;



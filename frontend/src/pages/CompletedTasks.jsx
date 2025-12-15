import { useEffect, useState } from "react";
import API from "../utils/api";
import "./CompletedTasks.css";

const CompletedTasks = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompletedTodos = async () => {
      try {
        const res = await API.get("/todos");
        
        const completed = res.data.todos.filter(
          (item) => item.completed === true
        );

        setTodos(completed);
      } catch (err) {
        console.error(err);
        setError("Failed to load completed tasks");
      }
    };

    fetchCompletedTodos();
  }, []);

  return (
    <div className="completed-container">
      <h2 className="completed-title">Completed Tasks</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {todos.length === 0 && (<p className="completed-empty">No completed tasks</p>)}

     <div className="completed-list">
       {todos.map((item) => (
        <div className="completed-item" key={item._id}> 
        <span className="completed-text">{item.title}</span>
        </div>
      ))}
     </div>
    </div>
  );
};

export default CompletedTasks;



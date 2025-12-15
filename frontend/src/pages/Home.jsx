import React, { useEffect, useState } from "react";
import API from "../utils/api";
import TodoList from "./TodoList";
import "./Home.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await API.get("/todos");
    setTodos(response.data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">My Todo List</h1>
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
};

export default Home;



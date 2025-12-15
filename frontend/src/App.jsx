import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import PendingTasks from "./pages/PendingTasks";
import CompletedTasks from "./pages/CompletedTasks";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoute";
import UpdateTodo from "./pages/UpdateTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


        <Route element={<ProtectedRoutes />}>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/pendingTasks" element={<PendingTasks />} />
            <Route path="/completedTasks" element={<CompletedTasks />} />
            <Route path="/update/:id" element={<UpdateTodo />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAllowed(true);
    } else {
      setAllowed(false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return allowed ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;


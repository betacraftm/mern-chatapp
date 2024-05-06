import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authUser } = useAuth();

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <Home /> : <Navigate to={"/login"} replace={true} />
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} replace={true} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} replace={true} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import Signup from "./pages/signup/signup.page";

// Components
import Header from "./components/ui/header/header.component";

import "./App.css";

const App = () => {
  const Protected = () => {
    const { user } = useSelector((state) => state.users);
    if (user) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route index path="/signup" element={<Signup />} />
        <Route element={<Protected />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

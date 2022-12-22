import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./components/common/Title";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ToDo from "./pages/ToDo";

function Router() {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

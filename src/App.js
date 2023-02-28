import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Users from "./components/users/Users";
import P404 from "./components/P404/P404";
import { DBConfig } from "./db/db";
import { initDB } from "react-indexed-db";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

initDB(DBConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </Router>
  );
}

export default App;

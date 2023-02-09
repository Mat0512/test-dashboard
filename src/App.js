import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login";
import Users from "./scenes/users";
import Layout from "./scenes/global";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

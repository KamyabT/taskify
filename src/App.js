import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Priorities from "./pages/Priorities";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/priorities" element={<Priorities />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Priorities from "./pages/Priorities";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import { TasksProvider } from "./context/TasksContext"; 
import "./App.css";

function App() {
  return (
    <TasksProvider>  
      <BrowserRouter>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/priorities" element={<Priorities />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>  
  );
}

export default App;
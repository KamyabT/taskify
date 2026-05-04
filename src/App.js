import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Priorities from "./pages/Priorities"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import Sidebar from "./components/layout/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/priorities" element={<Priorities />}></Route>
        <Route path="/statistics" element={<Statistics/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Sidebar />
    // </div>
  );
}

export default App;

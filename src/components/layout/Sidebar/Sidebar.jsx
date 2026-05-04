import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  FolderKanban,
  Users,
  Settings,
  ChartPie,
} from "lucide-react";
import logo from "../../../assets/pictures/Logo.png";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <nav>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
          <span>Taskify</span>
        </div>
        <ul className={style.menu}>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${style.link} ${isActive ? style.active : ""}`
              }
            >
              <div className={style.menuItem}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={({ isActive }) =>
              `${style.link} ${isActive ? style.active : ""}`
            }>
              <div className={style.menuItem}>
                <CheckSquare size={20} />
                <span>Tasks</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className={({ isActive}) => `${style.link} ${isActive ? style.active : ""}`}>
              <div className={style.menuItem}>
                <Calendar size={20} />
                <span>Calendar</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
              <div className={style.menuItem}>
                <FolderKanban size={20} />
                <span>Projects</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/priorities" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
              <div className={style.menuItem}>
                <Users size={20} />
                <span>Priorities</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
              <div className={style.menuItem}>
                <ChartPie size={20} />
                <span>Statistics</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
              <div className={style.menuItem}>
                <Settings size={20} />
                <span>Setting</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.profile}>
        <div className={style.avatar}>AM</div>
        <div className={style.info}>
          <span className={style.name}>Ali Moradi</span>
          <span className={style.email}>Email</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

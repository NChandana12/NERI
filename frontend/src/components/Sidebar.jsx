import { NavLink } from "react-router-dom";
import {
  Home,
  Brain,
  LayoutDashboard,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Training", path: "/training", icon: Brain },
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-stone-200 bg-white">

      {/* Logo */}
      <NavLink
        to="/"
        className="border-b border-stone-200 p-8 transition hover:bg-stone-50"
      >
        <h1 className="text-2xl font-bold text-[#114B4B]">
          NERI
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Emergency Response AI
        </p>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {links.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#114B4B] text-white"
                      : "text-stone-600 hover:bg-stone-100 hover:text-[#114B4B]"
                  }`
                }
              >
                <Icon size={18} />
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-stone-200 p-6">
        <p className="text-xs text-stone-400">
          Neri v1.0
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;
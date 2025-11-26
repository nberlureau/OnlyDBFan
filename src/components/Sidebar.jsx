import { Home, Search, PlusSquare, Bell, User, Settings, LogOut, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logoSombre from '../assets/logo_sombre.png';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Accueil", path: "/" },
    { icon: Search, label: "Explorer", path: "/explore" },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: PlusSquare, label: "Créer", path: "/create-post" },
    { icon: User, label: "Profil", path: "/profile" },
    { icon: Settings, label: "Paramètres", path: "/settings" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#050816] border-r border-white/10 p-6 flex flex-col justify-between z-50">
      <div>
        <div className="flex items-center gap-3 mb-10 pl-2">
          <img src={logoSombre} alt="OnlyDBFan Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-white hidden lg:block">OnlyDBFan</h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-4 w-full p-3 rounded-xl transition-colors ${isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <item.icon size={24} />
              <span className="text-base font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <NavLink to="/login" className="flex items-center space-x-4 p-3 text-gray-400 hover:text-red-400 transition hover:bg-white/5 rounded-xl">
        <LogOut size={24} />
        <span className="text-base font-medium">Déconnexion</span>
      </NavLink>
    </div>
  );
}
import { Home, Search, PlusSquare, Bell, User, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Accueil" },
    { icon: Search, label: "Recherche" },
    { icon: Bell, label: "Notifications" }, // [cite: 20]
    { icon: PlusSquare, label: "Créer un post" }, // [cite: 18]
    { icon: User, label: "Profil" },
    { icon: Settings, label: "Paramètres" }, // [cite: 24]
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between">
      {/* Logo & Titre */}
      <div>
        <h1 className="text-3xl font-bold text-pastel-primary mb-10 pl-2">OnlyDBFan</h1>
        
        {/* Menu de navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className="flex items-center space-x-4 w-full p-3 rounded-xl hover:bg-pastel-bg hover:text-pastel-primary transition-colors text-gray-600"
            >
              <item.icon size={26} />
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bas de page sidebar : Déconnexion ou infos utilisateur */}
      <button className="flex items-center space-x-4 p-3 text-gray-400 hover:text-red-400 transition">
        <LogOut size={24} />
        <span>Déconnexion</span>
      </button>
    </div>
  );
}
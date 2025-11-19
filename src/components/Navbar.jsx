import { Home, Search, PlusSquare, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 py-3 px-6 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {/* Barre de recherche / Loupe [cite: 32] */}
        <button className="p-2 hover:bg-pastel-primary/20 rounded-full transition">
            <Search size={24} className="text-gray-400" />
        </button>

        {/* Accueil [cite: 33] */}
        <button className="p-2 hover:bg-pastel-primary/20 rounded-full transition">
            <Home size={24} className="text-pastel-primary" />
        </button>

        {/* Ajout d'un post (Mis en avant) [cite: 35] */}
        <button className="p-3 bg-pastel-primary text-white rounded-full -mt-6 shadow-md hover:scale-105 transition">
            <PlusSquare size={28} />
        </button>

        {/* Notification [cite: 36] */}
        <button className="p-2 hover:bg-pastel-primary/20 rounded-full transition">
            <Bell size={24} className="text-gray-400" />
        </button>

        {/* Profil [cite: 34] */}
        <button className="p-2 hover:bg-pastel-primary/20 rounded-full transition">
            <User size={24} className="text-gray-400" />
        </button>
      </div>
    </nav>
  );
}
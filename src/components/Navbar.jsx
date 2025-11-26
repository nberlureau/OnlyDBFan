import { Home, Search, PlusSquare, Bell, User } from 'lucide-react';
import logo from '../assets/logo_sombre.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#050816]/90 backdrop-blur-sm border-b border-white/10 py-3 px-6 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="OnlyDBFan Logo" className="h-8 w-auto" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="flex items-center gap-6">
          <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white">
            <Home size={24} />
          </Link>
          <Link to="/explore" className="p-2 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white">
            <Search size={24} />
          </Link>
          <Link to="/create-post" className="p-2 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white">
            <PlusSquare size={24} />
          </Link>
          <Link to="/notifications" className="p-2 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white">
            <Bell size={24} />
          </Link>
          <Link to="/profile" className="p-2 hover:bg-white/10 rounded-full transition text-gray-300 hover:text-white">
            <User size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
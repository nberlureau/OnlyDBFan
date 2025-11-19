import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export default function PostCard({ username, image, avatarColor = "bg-pastel-primary" }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false); // [cite: 21] Ajouter favoris

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8 hover:shadow-md transition-shadow duration-300">
      
      {/* En-tête */}
      <div className="flex items-center p-4">
        <div className={`w-12 h-12 ${avatarColor} rounded-full mr-4 cursor-pointer`}></div>
        <div>
            <h3 className="font-bold text-gray-800 cursor-pointer hover:underline">{username}</h3>
            <p className="text-xs text-gray-400">Il y a 2 heures</p>
        </div>
      </div>

      {/* Image  Post au centre */}
      <div className="relative w-full cursor-pointer group" onDoubleClick={() => setLiked(true)}>
         <img src={image} alt="Post" className="w-full h-auto object-cover max-h-[600px]" />
         {/* Cœur en overlay au double click */}
         <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${liked ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <Heart size={100} className="text-white fill-white drop-shadow-lg animate-bounce" />
         </div>
      </div>

      {/* Actions [cite: 10] */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
                <button onClick={() => setLiked(!liked)} className="transform active:scale-90 transition">
                    <Heart size={28} className={liked ? "text-pastel-accent fill-pastel-accent" : "text-gray-400 hover:text-pastel-accent"} />
                </button>
                <button>
                    <MessageCircle size={28} className="text-gray-400 hover:text-pastel-primary transition" /> {/* [cite: 12] */}
                </button>
                <button>
                    <Share2 size={28} className="text-gray-400 hover:text-pastel-primary transition" /> {/* [cite: 13] */}
                </button>
            </div>
            <button onClick={() => setSaved(!saved)}>
                <Bookmark size={28} className={saved ? "text-yellow-400 fill-yellow-400" : "text-gray-400 hover:text-gray-600"} />
            </button>
        </div>

        <p className="text-gray-700 leading-relaxed">
            <span className="font-bold mr-2">{username}</span>
            Une journée parfaite sous le signe des couleurs pastel ! 🎨✨ <span className="text-pastel-primary cursor-pointer">#design #ui #web</span>
        </p>
      </div>
    </div>
  );
}
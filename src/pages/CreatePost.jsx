import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const { addPost, currentUser } = useData();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [privacy, setPrivacy] = useState('Public');
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const handlePublish = () => {
        if (!content.trim()) return;
        addPost(content, null); // Image handling mock or null for now
        navigate('/');
    };

    const togglePrivacy = () => setIsPrivacyOpen(!isPrivacyOpen);

    return (
        // Fond transparent (géré par le parent AppLayout) et couleur de texte adaptative
        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6">
                {/* Carte avec fond blanc en mode clair et sombre en mode dark, bordure adaptative */}
                <div className="w-full max-w-2xl bg-white dark:bg-white/5 rounded-2xl shadow-xl border border-gray-200 dark:border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
                        {/* Titre adaptatif */}
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white/90">Créer une publication</h2>
                        <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className="p-6 flex gap-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0"
                            style={{ backgroundImage: `url("${currentUser?.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg'}")` }}>
                        </div>
                        <div className="flex-1">
                            {/* Textarea adaptatif */}
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full min-h-[150px] bg-transparent border-none resize-none text-lg placeholder:text-gray-400 dark:placeholder:text-white/40 focus:ring-0 text-gray-900 dark:text-white/90"
                                placeholder={`Quoi de neuf, ${currentUser?.name?.split(' ')[0] || 'Invité'} ?`}
                            ></textarea>

                            {/* Zone de preview d'image adaptative */}
                            <div className="mt-4 border-2 border-dashed border-gray-300 dark:border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 dark:text-white/40 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
                                <p className="font-medium">Ajouter Photos/Vidéos</p>
                                <p className="text-xs">ou glisser-déposer</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer adaptatif */}
                    <div className="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                        <div className="flex gap-2">
                            {/* Boutons d'action avec hover adaptatif - Style "ronds noirs" en light mode */}
                            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition-colors" title="Photo/Video">
                                <span className="material-symbols-outlined">image</span>
                            </button>
                            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition-colors" title="Tag People">
                                <span className="material-symbols-outlined">person_add</span>
                            </button>
                            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition-colors" title="Feeling/Activity">
                                <span className="material-symbols-outlined">mood</span>
                            </button>
                            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition-colors" title="Check in">
                                <span className="material-symbols-outlined">location_on</span>
                            </button>
                            <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition-colors" title="More">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <button
                                    onClick={togglePrivacy}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/90 transition-colors">
                                    <span className="material-symbols-outlined text-lg">
                                        {privacy === 'Public' ? 'public' : 'lock'}
                                    </span>
                                    {privacy}
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </button>
                                {isPrivacyOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden z-10">
                                        <button onClick={() => { setPrivacy('Public'); setIsPrivacyOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/5 text-sm text-gray-700 dark:text-white">Public</button>
                                        <button onClick={() => { setPrivacy('Privé'); setIsPrivacyOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/5 text-sm text-gray-700 dark:text-white">Privé</button>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handlePublish}
                                disabled={!content.trim()}
                                className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                Publier
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

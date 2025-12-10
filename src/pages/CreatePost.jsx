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
        const image = hasMedia ? "https://source.unsplash.com/random/800x600?nature" : null;
        addPost(content, image);
        navigate('/');
    };

    const handleSaveDraft = () => {
        setShowDraftToast(true);
        setTimeout(() => setShowDraftToast(false), 3000);
    };

    const toggleMedia = () => {
        setHasMedia(!hasMedia);
    };

    return (
        <div className="font-display bg-gray-50 dark:bg-black min-h-screen">
            <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <h1 className="text-xl font-bold dark:text-white">Créer une publication</h1>
                <button onClick={() => navigate('/')} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
                    <span className="material-symbols-outlined dark:text-white">close</span>
                </button>
            </header>

            <main className="max-w-2xl mx-auto p-6">
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/10">
                    <div className="flex gap-4">
                        <img
                            src={currentUser?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuAVKAP-N51JKRv4siJBUiRmGuBd-W9Kj6aSOmyQxQU5pWQ5T5-kzqWuSOUnMiC5oPONC6T5xpHqLXxBmMjd-X0D20nCRUmBY0yrylaamyNpc-qvy7FRzLER-_mEXlny6LvC5xS4_ixlHWmaiYrbKHxo3oXzBCGubh4ubdgEvfuhEbB1qOZi2yn8E9uMhVI2SJ8Er2C2WvIsvry9K8Q7k7-L6vPSHIr0Cb52JMsiRArhYKPOjdfo-QS53t3UcK5n1lo6gu0ij3kVJTfZ"}
                            alt="User avatar"
                            className="size-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Quoi de neuf ?"
                                className="w-full min-h-[120px] bg-transparent border-none p-0 text-xl placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-0 resize-none dark:text-white"
                            ></textarea>

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

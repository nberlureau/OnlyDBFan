import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';


export default function Settings() {
    const { theme, setTheme } = useTheme();

    return (
        // Fond transparent et texte adaptatif
        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Titre principal adaptatif */}
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white/90 mb-8">Paramètres</h1>

                    <div className="flex gap-8">
                        {/* Sidebar de navigation */}
                        <div className="w-64 shrink-0">
                            <nav className="flex flex-col gap-1">
                                <button className="text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">Compte</button>
                                {/* Boutons de navigation adaptatifs */}
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 dark:text-white/60 font-medium hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90 transition-colors">Confidentialité et sécurité</button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 dark:text-white/60 font-medium hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90 transition-colors">Notifications</button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 dark:text-white/60 font-medium hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90 transition-colors">Affichage et accessibilité</button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 dark:text-white/60 font-medium hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90 transition-colors">Aide et support</button>
                            </nav>
                        </div>

                        <div className="flex-1 space-y-8">
                            {/* Section Informations du profil adaptative */}
                            <section className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-6">Informations du profil</h2>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="size-24 rounded-full bg-cover bg-center"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg")' }}>
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-white dark:bg-white/5 p-1.5 rounded-full border-2 border-gray-200 dark:border-[#1c0d11] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-sm text-gray-700 dark:text-white">edit</span>
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white/90">Sofia Chen</h3>
                                        <p className="text-gray-500 dark:text-white/60">@sofiachen</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-white/90">Nom d'affichage</label>
                                        {/* Input adaptatif */}
                                        <input type="text" defaultValue="Sofia Chen" className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-white/90">Nom d'utilisateur</label>
                                        <input type="text" defaultValue="sofiachen" className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-white/90">Bio</label>
                                        <textarea className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium min-h-[100px] resize-none" defaultValue="Digital Artist & UI Designer 🎨 | Creating visual experiences that matter. 📍 San Francisco"></textarea>
                                        <p className="text-xs text-gray-500 dark:text-white/40 text-right">85/150 caractères</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-white/90">E-mail</label>
                                        <input type="email" defaultValue="sofia.chen@example.com" className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-white/90">Site web</label>
                                        <input type="url" defaultValue="https://sofiachen.design" className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                    </div>
                                </div>
                            </section>

                            {/* Section Préférences adaptative */}
                            <section className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-6">Préférences</h2>
                                <div className="space-y-6">
                                    {/* Theme Selector */}
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-gray-900 dark:text-white/90">Thème</h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            <button
                                                onClick={() => setTheme('light')}
                                                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'light'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-white/60'
                                                    }`}
                                            >
                                                <Sun size={24} />
                                                <span className="font-medium">Clair</span>
                                            </button>
                                            <button
                                                onClick={() => setTheme('dark')}
                                                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'dark'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-white/60'
                                                    }`}
                                            >
                                                <Moon size={24} />
                                                <span className="font-medium">Sombre</span>
                                            </button>
                                            <button
                                                onClick={() => setTheme('system')}
                                                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'system'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-white/60'
                                                    }`}
                                            >
                                                <Monitor size={24} />
                                                <span className="font-medium">Système</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Toggle switch adaptatif */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white/90">Compte privé</h3>
                                            <p className="text-sm text-gray-500 dark:text-white/60">Seules les personnes que vous approuvez peuvent voir vos photos et vidéos.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white/90">Statut d'activité</h3>
                                            <p className="text-sm text-gray-500 dark:text-white/60">Permettre aux comptes que vous suivez et à ceux à qui vous envoyez des messages de voir quand vous étiez actif pour la dernière fois.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white/90">Notifications par e-mail</h3>
                                            <p className="text-sm text-gray-500 dark:text-white/60">Recevoir des e-mails concernant l'activité de votre compte.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </section>

                            <div className="flex justify-end gap-4">
                                <button className="px-6 py-2.5 rounded-lg font-bold text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">Annuler</button>
                                <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
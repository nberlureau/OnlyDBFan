import React from 'react';

export default function Settings() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 p-8">


                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-white/90 mb-8">Paramètres</h1>

                    <div className="flex gap-8">
                        <div className="w-64 shrink-0">
                            <nav className="flex flex-col gap-1">
                                <button className="text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">Compte</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Confidentialité et sécurité</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Notifications</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Affichage et accessibilité</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Aide et support</button>
                            </nav>
                        </div>

                        <div className="flex-1 space-y-8">
                            <section className="bg-white/5 rounded-2xl p-6 shadow-sm border border-white/5">
                                <h2 className="text-xl font-bold text-white/90 mb-6">Informations du profil</h2>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="size-24 rounded-full bg-cover bg-center"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg")' }}>
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-white/5 p-1.5 rounded-full border-2 border-[#1c0d11] hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white/90">Sofia Chen</h3>
                                        <p className="text-white/60">@sofiachen</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Nom d'affichage</label>
                                        <input type="text" defaultValue="Sofia Chen" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Nom d'utilisateur</label>
                                        <input type="text" defaultValue="sofiachen" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-white/90">Bio</label>
                                        <textarea className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium min-h-[100px] resize-none" defaultValue="Digital Artist & UI Designer 🎨 | Creating visual experiences that matter. 📍 San Francisco"></textarea>
                                        <p className="text-xs text-white/40 text-right">85/150 caractères</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">E-mail</label>
                                        <input type="email" defaultValue="sofia.chen@example.com" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Site web</label>
                                        <input type="url" defaultValue="https://sofiachen.design" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white/5 rounded-2xl p-6 shadow-sm border border-white/5">
                                <h2 className="text-xl font-bold text-white/90 mb-6">Préférences</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Compte privé</h3>
                                            <p className="text-sm text-white/60">Seules les personnes que vous approuvez peuvent voir vos photos et vidéos.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Statut d'activité</h3>
                                            <p className="text-sm text-white/60">Permettre aux comptes que vous suivez et à ceux à qui vous envoyez des messages de voir quand vous étiez actif pour la dernière fois.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Notifications par e-mail</h3>
                                            <p className="text-sm text-white/60">Recevoir des e-mails concernant l'activité de votre compte.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </section>

                            <div className="flex justify-end gap-4">
                                <button className="px-6 py-2.5 rounded-lg font-bold text-white/60 hover:bg-white/5 transition-colors">Annuler</button>
                                <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

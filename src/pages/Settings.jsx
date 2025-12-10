import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { Sun, Moon, Monitor } from 'lucide-react';


export default function Settings() {
    const { theme, setTheme } = useTheme();
    const { currentUser } = useData();
    const [activeSection, setActiveSection] = React.useState('account');

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
                                <button
                                    onClick={() => setActiveSection('account')}
                                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${activeSection === 'account'
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90'
                                        }`}
                                >
                                    Compte
                                </button>
                                <button
                                    onClick={() => setActiveSection('security')}
                                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${activeSection === 'security'
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90'
                                        }`}
                                >
                                    Confidentialité et sécurité
                                </button>
                                <button
                                    onClick={() => setActiveSection('notifications')}
                                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${activeSection === 'notifications'
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90'
                                        }`}
                                >
                                    Notifications
                                </button>
                                <button
                                    onClick={() => setActiveSection('display')}
                                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${activeSection === 'display'
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90'
                                        }`}
                                >
                                    Affichage et accessibilité
                                </button>
                                <button
                                    onClick={() => setActiveSection('help')}
                                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${activeSection === 'help'
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white/90'
                                        }`}
                                >
                                    Aide et support
                                </button>
                            </nav>
                        </div>

                        <div className="flex-1 space-y-8">
                            {/* Section Informations du profil (Account) */}
                            {activeSection === 'account' && (
                                <section className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5 animate-fade-in">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-6">Informations du profil</h2>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="relative">
                                            <div className="size-24 rounded-full bg-cover bg-center"
                                                style={{ backgroundImage: `url("${currentUser?.avatar}")` }}>
                                            </div>
                                            <button className="absolute bottom-0 right-0 bg-white dark:bg-white/5 p-1.5 rounded-full border-2 border-gray-200 dark:border-[#1c0d11] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                                <span className="material-symbols-outlined text-sm text-gray-700 dark:text-white">edit</span>
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white/90">{currentUser?.name}</h3>
                                            <p className="text-gray-500 dark:text-white/60">{currentUser?.handle}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-white/90">Nom d'affichage</label>
                                            <input type="text" defaultValue={currentUser?.name} className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-white/90">Nom d'utilisateur</label>
                                            <input type="text" defaultValue={currentUser?.handle?.replace('@', '')} className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                        </div>
                                        <div className="col-span-2 space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-white/90">Bio</label>
                                            <textarea className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium min-h-[100px] resize-none" defaultValue={currentUser?.bio || "Pas de bio renseignée."}></textarea>
                                            <p className="text-xs text-gray-500 dark:text-white/40 text-right">85/150 caractères</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-white/90">E-mail</label>
                                            <input type="email" defaultValue={`${currentUser?.handle?.replace('@', '')}@example.com`} className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-white/90">Site web</label>
                                            <input type="url" defaultValue={`https://${currentUser?.handle?.replace('@', '')}.design`} className="w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white/90 font-medium" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4 mt-8">
                                        <button className="px-6 py-2.5 rounded-lg font-bold text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">Annuler</button>
                                        <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Enregistrer</button>
                                    </div>
                                </section>
                            )}

                            {/* Section Préférences (Display) */}
                            {activeSection === 'display' && (
                                <section className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5 animate-fade-in">
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
                                    </div>
                                </section>
                            )}

                            {/* Placeholders for other sections */}
                            {(activeSection === 'security' || activeSection === 'notifications' || activeSection === 'help') && (
                                <section className="bg-white dark:bg-white/5 rounded-2xl p-12 text-center border border-gray-200 dark:border-white/5 animate-fade-in">
                                    <div className="size-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-3xl text-gray-400">construction</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Section en construction</h3>
                                    <p className="text-gray-500 dark:text-white/60 max-w-md mx-auto">
                                        Cette section n'est pas encore disponible dans cette version de démonstration.
                                    </p>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
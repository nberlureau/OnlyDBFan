import React from 'react';

export default function Profile() {
    const [activeTab, setActiveTab] = React.useState('posts');

    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 relative">


                <div className="h-64 w-full bg-cover bg-center relative"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button className="absolute bottom-4 right-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">edit</span> Modifier la couverture
                    </button>
                </div>

                <div className="max-w-5xl mx-auto px-8 pb-12">
                    {/* Profile Header */}
                    <div className="relative -mt-20 mb-8 flex items-end justify-between">
                        <div className="flex items-end gap-6">
                            <div className="relative">
                                <div className="size-40 rounded-full border-4 border-[#050816] bg-cover bg-center shadow-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg")' }}>
                                </div>
                                <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-xl">add_a_photo</span>
                                </button>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold text-[#1c0d11] dark:text-white/90 flex items-center gap-2">
                                    Sofia Chen
                                    <span className="material-symbols-outlined text-blue-500 text-2xl" title="Verified">verified</span>
                                </h1>
                                <p className="text-[#9c4962] dark:text-white/60 font-medium text-lg">@sofiachen</p>
                                <p className="text-black/80 dark:text-white/80 mt-2 max-w-md">Digital Artist & UI Designer 🎨 | Creating visual experiences that matter. 📍 San Francisco</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-4">
                            <button className="px-6 py-2.5 rounded-lg border-2 border-black/10 dark:border-white/10 font-bold text-[#1c0d11] dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Envoyer un message</button>
                            <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Suivre</button>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-8 mb-8 border-b border-black/10 dark:border-white/10 pb-6">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">1.2k</span>
                            <span className="text-black/60 dark:text-white/60">Publications</span>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">45.8k</span>
                            <span className="text-black/60 dark:text-white/60">Abonnés</span>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">1,024</span>
                            <span className="text-black/60 dark:text-white/60">Abonnements</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-8 mb-8">
                        {['posts', 'about', 'friends', 'photos'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 border-b-2 font-bold capitalize transition-colors ${activeTab === tab
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-black/60 dark:text-white/60 hover:text-[#1c0d11] dark:hover:text-white/90'
                                    }`}
                            >
                                {tab === 'posts' && 'Publications'}
                                {tab === 'about' && 'À propos'}
                                {tab === 'friends' && 'Amis'}
                                {tab === 'photos' && 'Photos'}
                            </button>
                        ))}
                    </div>

                    {/* Content Sections */}
                    {activeTab === 'posts' && (
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={`https://source.unsplash.com/random/800x800?art,design,${item}`}
                                        alt={`Artwork ${item}`}
                                        onError={(e) => e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDkvnriDnv2hkQJY1X69LxuUmwA_2Nrl6mc_4eVDZYsXP2r_nYVTvhAATVEGyq6F7K4Yvpr_SbDFVjaJYtpdF2i1J0QmLM9hvxNyDTO_LaBMObOaXLbIx9_h1H6R7hjBiNvPVcoFNKBKJg3BpOiPLmvtDbeDE3h_sCT63FmFtQx01SSHvyHCGINK3fTQJz0vnCjxirbI1OMGauFcYUio2dAsdA1CrkcaK18-6aEHrvgA0kXX2xd0RB4FNtoLHIbNnoIl93wCZAgsWui"}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                            <span className="font-bold">{(Math.random() * 5 + 1).toFixed(1)}k</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                            <span className="font-bold">{Math.floor(Math.random() * 200)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10">
                            <h3 className="text-xl font-bold text-[#1c0d11] dark:text-white/90 mb-4">À propos de Sofia</h3>
                            <div className="space-y-4 text-black/80 dark:text-white/80">
                                <p>
                                    Passionnée par l'art numérique et le design d'interface, je crée des expériences visuelles immersives.
                                    J'aime explorer de nouvelles techniques de rendu et partager mes découvertes avec la communauté.
                                </p>
                                <hr className="border-gray-200 dark:border-white/10" />
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">work</span>
                                        <span>Senior UI Designer chez <span className="font-bold">TechVision</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">location_on</span>
                                        <span>San Francisco, CA</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">cake</span>
                                        <span>Née le 14 Avril</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">calendar_month</span>
                                        <span>A rejoint OnlyDBFan en 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'friends' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((friend) => (
                                <div key={friend} className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-gray-200 dark:bg-white/10 bg-cover bg-center" style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=${friend + 10})` }}></div>
                                    <div>
                                        <h4 className="font-bold text-[#1c0d11] dark:text-white/90">Utilisateur {friend}</h4>
                                        <p className="text-xs text-black/60 dark:text-white/60">@user{friend}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'photos' && (
                        <div className="p-12 text-center text-gray-500 dark:text-white/40">
                            <span className="material-symbols-outlined text-6xl mb-4">photo_library</span>
                            <p className="text-xl">Toutes les photos (Mock)</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

import React from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const { users, toggleFollow, currentUser } = useData();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState('posts');

    // For demo purposes, we'll display "Sophia Chen" (u4) as the profile being viewed
    // unless it's the current user, but for now let's simulate viewing another profile
    const profileUser = users.find(u => u.handle === '@sophiachen') || users[0];

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
                                    style={{ backgroundImage: `url("${profileUser.avatar}")` }}>
                                </div>
                                <button className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-xl">add_a_photo</span>
                                </button>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold text-[#1c0d11] dark:text-white/90 flex items-center gap-2">
                                    {profileUser.name}
                                    <span className="material-symbols-outlined text-blue-500 text-2xl" title="Verified">verified</span>
                                </h1>
                                <p className="text-[#9c4962] dark:text-white/60 font-medium text-lg">{profileUser.handle}</p>
                                <p className="text-black/80 dark:text-white/80 mt-2 max-w-md">Digital Artist & UI Designer 🎨 | Creating visual experiences that matter. 📍 San Francisco</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-4">
                            <button
                                onClick={() => navigate('/messages')}
                                className="px-6 py-2.5 rounded-lg border-2 border-black/10 dark:border-white/10 font-bold text-[#1c0d11] dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                Envoyer un message
                            </button>
                            <button
                                onClick={() => toggleFollow(profileUser.id)}
                                className={`px-6 py-2.5 rounded-lg font-bold shadow-lg transition-colors ${profileUser.isFollowing
                                    ? 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10'
                                    : 'bg-primary text-white hover:bg-primary/90 shadow-primary/30'
                                    }`}>
                                {profileUser.isFollowing ? 'Abonné' : 'Suivre'}
                            </button>
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
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`pb-2 border-b-2 font-bold transition-colors ${activeTab === 'posts'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-black/60 dark:text-white/60 hover:text-[#1c0d11] dark:hover:text-white/90'
                                }`}
                        >
                            Publications
                        </button>
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`pb-2 border-b-2 font-medium transition-colors ${activeTab === 'about'
                                ? 'border-primary text-primary font-bold'
                                : 'border-transparent text-black/60 dark:text-white/60 hover:text-[#1c0d11] dark:hover:text-white/90'
                                }`}
                        >
                            À propos
                        </button>
                        <button
                            onClick={() => setActiveTab('friends')}
                            className={`pb-2 border-b-2 font-medium transition-colors ${activeTab === 'friends'
                                ? 'border-primary text-primary font-bold'
                                : 'border-transparent text-black/60 dark:text-white/60 hover:text-[#1c0d11] dark:hover:text-white/90'
                                }`}
                        >
                            Amis
                        </button>
                        <button className="pb-2 border-b-2 border-transparent text-black/60 dark:text-white/60 font-medium hover:text-[#1c0d11] dark:hover:text-white/90 transition-colors">Photos</button>
                    </div>

                    {/* Content Area */}
                    {activeTab === 'posts' && (
                        <div className="grid grid-cols-3 gap-4">
                            {/* Item 1 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">1.5k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">84</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBNz_5a9wdouyYRO4nasBPOZgZ2E45OhKnVguus3y0egEVwFYuh19p8nk4Wf2KGV4jpCAKQVqjvZbC2qEWGZ6vEAvPH4lE31M-podPFlkYbTy2WgLpsg8ySRnApvzYRMeLtIzhzFQ-r-7eVeAR1-TjfZM3kRW06aLst02CRiNoWGoFCLikLCL7_qZs0kl1TRd6OODub7Wvvaq2GbpZth_U62ZmiVj5yusYBe_HGAv2Mgnmo2c8lW3fxOXraWe3mbqkKXMoHdXbMaP" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">2.1k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">120</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00zQVVVPK1guDl6ieqJqwnV0WfEZBgvoDgLXQ6ckJwGFNlpnG3d8Y_FKsCoq4ZNsbA7ZqnZBwcCRb_-Bjzz1aMCE_qIWAdrYh3-IqszG4QTSo-cRlp6rHjx1waM_-4nsBnMx0VaGqPxpz8TV5k4LidIHCxCtlNhKWO3-gcEF1eKDb9xKKtozpt-QIFKEwXFvemfXSM_8SeKpXsGloQ3mMXGze5oaSS54C4-B2mMU1heSMRxNjBDsp4N0ym19aG1Gi-_CQLTW4vjm5" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">980</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">45</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvnriDnv2hkQJY1X69LxuUmwA_2Nrl6mc_4eVDZYsXP2r_nYVTvhAATVEGyq6F7K4Yvpr_SbDFVjaJYtpdF2i1J0QmLM9hvxNyDTO_LaBMObOaXLbIx9_h1H6R7hjBiNvPVcoFNKBKJg3BpOiPLmvtDbeDE3h_sCT63FmFtQx01SSHvyHCGINK3fTQJz0vnCjxirbI1OMGauFcYUio2dAsdA1CrkcaK18-6aEHrvgA0kXX2xd0RB4FNtoLHIbNnoIl93wCZAgsWui" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">3.4k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">210</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXjCw9Gz3XLbydWWat6Vy4x1toG9ffCyu8-hD0d0IBIBpbdr53DosSETb7Gb5tre67P4JoG-tG3nBoVaWrxAV4F165hfIelJ3oxU2dmmOzSJgab6WgyfcgsNFlZTJct2r9c1-0MVcsTjC5pRm3s_vKBLwa8PgWnoOKfCMZ20Lx_UcxAUEsvVzcS-ReiO5KNNFCZ3ugrN5uK8c059gIDGLPcfv_hxj-T_wKir3ZnPbvPD1Ij9W694DWq_XdAWUaKvxFfISmL-cSeCm0" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">1.8k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">92</span>
                                    </div>
                                </div>
                            </div>
                            {/* Item 6 */}
                            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9CI0FrVyctmdxDeOwtl9Zc-tffoKZcJRS6ld7xphtg_DPgXmGn9c9UAVS9HPq8g8LzzV9ihrvVzjgGJuyt8hjJO5Ld9SuKDZtXuZEWiOiUTwO4zwD2GMSgbuI4wMzQnjPomZnRiihbH9ZXuU8UXH57LADtdVcslahE66BBgepoLN0OoL8szIzaOikl2VUxq51CIJHPjVPPpH2Lz2sSiXeOmVfRheQxoft8YJABF_U8diWWxPwiYttx3YjUJfnn-Z4bb1CreyAi6g" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                        <span className="font-bold">2.5k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                        <span className="font-bold">156</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-white/5 animate-fade-in">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                À propos de Sofia
                            </h3>
                            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Salut ! Je suis Sofia, Digital Artist et UI Designer basée à San Francisco.
                                    Passionnée par la création d'expériences visuelles qui marquent les esprits.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                                        <span className="material-symbols-outlined text-gray-400">work</span>
                                        <div>
                                            <p className="text-sm text-gray-400">Profession</p>
                                            <p className="font-medium text-gray-900 dark:text-white">UI Designer chez Creative Inc.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                                        <span className="material-symbols-outlined text-gray-400">location_on</span>
                                        <div>
                                            <p className="text-sm text-gray-400">Localisation</p>
                                            <p className="font-medium text-gray-900 dark:text-white">San Francisco, CA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                                        <span className="material-symbols-outlined text-gray-400">calendar_month</span>
                                        <div>
                                            <p className="text-sm text-gray-400">A rejoint le</p>
                                            <p className="font-medium text-gray-900 dark:text-white">Mars 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                                        <span className="material-symbols-outlined text-gray-400">link</span>
                                        <div>
                                            <p className="text-sm text-gray-400">Site Web</p>
                                            <a href="https://sofiachen.design" className="font-medium text-primary hover:underline">sofiachen.design</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'friends' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <div className="size-12 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?img=${item + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Alex Johnson</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">@alex_j</p>
                                    </div>
                                    <button className="ml-auto p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                        <span className="material-symbols-outlined">person_add</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

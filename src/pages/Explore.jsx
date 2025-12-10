import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const EXPLORE_ITEMS = [
    { id: 1, type: 'photo', tags: ['technology', 'code'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg", alt: "Modern laptop with code" },
    { id: 2, type: 'photo', tags: ['gaming', 'neon'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArBNz_5a9wdouyYRO4nasBPOZgZ2E45OhKnVguus3y0egEVwFYuh19p8nk4Wf2KGV4jpCAKQVqjvZbC2qEWGZ6vEAvPH4lE31M-podPFlkYbTy2WgLpsg8ySRnApvzYRMeLtIzhzFQ-r-7eVeAR1-TjfZM3kRW06aLst02CRiNoWGoFCLikLCL7_qZs0kl1TRd6OODub7Wvvaq2GbpZth_U62ZmiVj5yusYBe_HGAv2Mgnmo2c8lW3fxOXraWe3mbqkKXMoHdXbMaP", alt: "Retro gaming setup" },
    { id: 3, type: 'photo', tags: ['workspace', 'minimal'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC00zQVVVPK1guDl6ieqJqwnV0WfEZBgvoDgLXQ6ckJwGFNlpnG3d8Y_FKsCoq4ZNsbA7ZqnZBwcCRb_-Bjzz1aMCE_qIWAdrYh3-IqszG4QTSo-cRlp6rHjx1waM_-4nsBnMx0VaGqPxpz8TV5k4LidIHCxCtlNhKWO3-gcEF1eKDb9xKKtozpt-QIFKEwXFvemfXSM_8SeKpXsGloQ3mMXGze5oaSS54C4-B2mMU1heSMRxNjBDsp4N0ym19aG1Gi-_CQLTW4vjm5", alt: "Minimalist workspace" },
    { id: 4, type: 'video', tags: ['matrix', 'code'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkvnriDnv2hkQJY1X69LxuUmwA_2Nrl6mc_4eVDZYsXP2r_nYVTvhAATVEGyq6F7K4Yvpr_SbDFVjaJYtpdF2i1J0QmLM9hvxNyDTO_LaBMObOaXLbIx9_h1H6R7hjBiNvPVcoFNKBKJg3BpOiPLmvtDbeDE3h_sCT63FmFtQx01SSHvyHCGINK3fTQJz0vnCjxirbI1OMGauFcYUio2dAsdA1CrkcaK18-6aEHrvgA0kXX2xd0RB4FNtoLHIbNnoIl93wCZAgsWui", alt: "Matrix code rain" },
    { id: 5, type: 'photo', tags: ['code', 'html'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXjCw9Gz3XLbydWWat6Vy4x1toG9ffCyu8-hD0d0IBIBpbdr53DosSETb7Gb5tre67P4JoG-tG3nBoVaWrxAV4F165hfIelJ3oxU2dmmOzSJgab6WgyfcgsNFlZTJct2r9c1-0MVcsTjC5pRm3s_vKBLwa8PgWnoOKfCMZ20Lx_UcxAUEsvVzcS-ReiO5KNNFCZ3ugrN5uK8c059gIDGLPcfv_hxj-T_wKir3ZnPbvPD1Ij9W694DWq_XdAWUaKvxFfISmL-cSeCm0", alt: "HTML code close up" },
    { id: 6, type: 'photo', tags: ['coffee', 'work'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY9CI0FrVyctmdxDeOwtl9Zc-tffoKZcJRS6ld7xphtg_DPgXmGn9c9UAVS9HPq8g8LzzV9ihrvVzjgGJuyt8hjJO5Ld9SuKDZtXuZEWiOiUTwO4zwD2GMSgbuI4wMzQnjPomZnRiihbH9ZXuU8UXH57LADtdVcslahE66BBgepoLN0OoL8szIzaOikl2VUxq51CIJHPjVPPpH2Lz2sSiXeOmVfRheQxoft8YJABF_U8diWWxPwiYttx3YjUJfnn-Z4bb1CreyAi6g", alt: "Coding in coffee shop" },
    { id: 7, type: 'photo', tags: ['setup', 'monitors'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1UjZhA2J9FfrWI9DN30grwN3UwvNGv9PuTpI0gWBL-GkmCrWgQV9J_6e2bodi4cFN7KMaqDAB4xurdFdmCP4urfVyxukkPtrHN4VmDdcK1yt8RgK3O1uygJoL4SUu6CfLU1fJtOq5FDWAN7tfH9O510-oTnq2igS__vM-1Ms1LdiZIm7Xsye5nIzulM2fAczZYZt4sNOPCOGZa4BM2VOqCAo5zaZ7g1yLa81N_rFkJU1TuT-LK5XzHAg5LkocG9qwrqx1B2smJMOR", alt: "Multiple monitors setup" },
    { id: 8, type: 'photo', tags: ['team', 'meeting'], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJapfuViRPjMwLieZKCy--co-FekasIfSr_xNY4g2PTU87jDDOjdyQgWLtUrvtiWUOdv_02L55hff1Yjx5YLII_FGtVKK09axCzpWlYb1xduIxsKkGWUELX2zZk9GGO4w5ceBpn0E2WzLcDfvTE-_VYJxFsmerebS1-Cwm__wyu41_sVJiasH5fO3kZvFRv0fmaDvtV4eU3TM_tZlckY2x8OQG2vYKq2jCU6IVhhHSOhd4fXhOmVEF7U9MgWq-h58dzDajsYUp9iF", alt: "Team collaboration" }
];

export default function Explore() {
    const { users, toggleFollow } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('Pour vous');

    const filteredItems = EXPLORE_ITEMS.filter(item => {
        // Search Filter
        const matchesSearch = searchTerm === '' ||
            item.tags.some(tag => tag.includes(searchTerm.toLowerCase())) ||
            item.alt.toLowerCase().includes(searchTerm.toLowerCase());

        // Tab Filter
        if (activeTab === 'Photos' && item.type !== 'photo') return false;
        if (activeTab === 'Vidéos' && item.type !== 'video') return false;

        return matchesSearch;
    });

    // Simple shuffle for "Top" or "Pour vous" to make it look dynamic
    const displayItems = activeTab === 'Top' ? [...filteredItems].reverse() : filteredItems;

    return (
        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 h-screen w-full flex flex-col overflow-hidden relative">
            <div className="flex h-full w-full">
                <div className="flex flex-1">
                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto">
                        <div className="mx-auto max-w-4xl px-8 py-6">
                            {/* Top Bar with Search */}
                            <header className="flex h-12 items-center justify-between pb-6">
                                <h2 className="text-gray-900 dark:text-white/90 text-2xl font-bold leading-tight tracking-[-0.015em]">Explorer
                                </h2>
                                <div className="flex items-center gap-4">
                                    <button
                                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                                        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 min-h-screen">
                                            <div className="flex-1">
                                                <main className="grid grid-cols-12 gap-8 px-8 py-6">
                                                    {/* Main Feed / Grid */}
                                                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                                                        {/* Search Bar */}
                                                        <div className="relative">
                                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                                            <input
                                                                type="text"
                                                                value={searchQuery}
                                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                                placeholder="Rechercher des créateurs, des posts..."
                                                                className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-home/50 outline-none transition-all dark:text-white dark:placeholder:text-gray-500"
                                                            />
                                                        </div>

                                                        {/* Tabs */}
                                                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                                            {tabs.map((tab) => (
                                                                <button
                                                                    key={tab}
                                                                    onClick={() => setActiveTab(tab)}
                                                                    className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                                                            ? 'bg-black text-white dark:bg-white dark:text-black'
                                                                            : 'bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                                                                        }`}
                                                                >
                                                                    {tab}
                                                                </button>
                                                            ))}
                                                        </div>

                                                        {/* Content Grid */}
                                                        <div className={activeTab === 'Comptes' ? "flex flex-col gap-4" : "columns-2 md:columns-3 gap-4 space-y-4"}>
                                                            {activeTab === 'Comptes' ? (
                                                                filteredContent.length > 0 ? (
                                                                    filteredContent.map(user => (
                                                                        <div key={user.id} className="flex items-center justify-between p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                                                                            <div className="flex items-center gap-4">
                                                                                <img src={user.avatar} alt={user.name} className="size-12 rounded-full object-cover" />
                                                                                <div>
                                                                                    <h3 className="font-bold text-gray-900 dark:text-white">{user.name}</h3>
                                                                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{user.handle}</p>
                                                                                </div>
                                                                            </div>
                                                                            <button
                                                                                onClick={() => toggleFollow(user.id)}
                                                                                className={`px-4 py-1.5 rounded-full font-bold text-sm transition-colors ${user.isFollowing
                                                                                        ? 'border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300'
                                                                                        : 'bg-primary-home text-white hover:opacity-90'
                                                                                    }`}>
                                                                                {user.isFollowing ? 'Abonné' : 'Suivre'}
                                                                            </button>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <p className="text-center text-gray-500 mt-8">Aucun compte trouvé.</p>
                                                                )
                                                            ) : (
                                                                filteredContent.length > 0 ? (
                                                                    filteredContent.map((post) => (
                                                                        <div key={post.id} className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden">
                                                                            {post.image ? (
                                                                                <img src={post.image} alt="Post" className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                                                                            ) : (
                                                                                <div className="w-full p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                                                                                    <p className="text-gray-900 dark:text-white font-medium line-clamp-4">{post.content}</p>
                                                                                </div>
                                                                            )}
                                                                            {/* Hover Overlay */}
                                                                            {post.image && (
                                                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                                                                                    <div className="flex items-center gap-1">
                                                                                        <span className="material-symbols-outlined text-sm">favorite</span>
                                                                                        <span className="font-bold text-sm">{post.likes}</span>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className="col-span-full text-center py-10 text-gray-500">
                                                                        Aucun résultat pour "{searchQuery || activeTab}"
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                ))}
                                                    </div>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-4">
                                                <h3 className="font-bold text-lg mb-4 text-[#1c0d11] dark:text-white/90">Tendances</h3>
                                                <div className="flex flex-col gap-3">
                                                    <div onClick={() => setSearchTerm('uidesign')}>
                                                        <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#uidesign</p>
                                                        <p className="text-xs text-[#9c4962] dark:text-white/60">125k posts</p>
                                                    </div>
                                                    <div onClick={() => setSearchTerm('webdev')}>
                                                        <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#webdev</p>
                                                        <p className="text-xs text-[#9c4962] dark:text-white/60">98k posts</p>
                                                    </div>
                                                    <div onClick={() => setSearchTerm('digitalart')}>
                                                        <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#digitalart</p>
                                                        <p className="text-xs text-[#9c4962] dark:text-white/60">82k posts</p>
                                                    </div>
                                                    <div onClick={() => setSearchTerm('inspiration')}>
                                                        <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#inspiration</p>
                                                        <p className="text-xs text-[#9c4962] dark:text-white/60">76k posts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                </div>
                        </div>
                </div>
                );
}

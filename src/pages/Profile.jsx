import React from 'react';

export default function Profile() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* SideNavBar */}
            <aside className="fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-[#050816] p-6 border-r border-white/10 flex flex-col justify-between z-20">
                <div>
                    <div className="flex items-center gap-3 mb-10 text-primary">
                        <span className="material-symbols-outlined text-4xl">hub</span>
                        <h1 className="text-2xl font-bold tracking-tight text-[#1c0d11] dark:text-white/90">ConnectSphere</h1>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                            href="/">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
                            <span className="text-base font-medium">Feed</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                            href="/explore">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">explore</span>
                            <span className="text-base font-medium">Discover</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                            href="/messages">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                            <span className="text-base font-medium">Chats</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30"
                            href="/profile">
                            <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                            <span className="text-base font-bold">My Profile</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                            href="/settings">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                            <span className="text-base font-medium">Settings</span>
                        </a>
                    </nav>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-orange-300/20 p-4 rounded-2xl">
                    <p className="text-sm font-semibold mb-2 text-[#1c0d11] dark:text-white/90">Go Premium</p>
                    <p className="text-xs text-black/60 dark:text-white/60 mb-3">Unlock exclusive features and analytics.</p>
                    <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">Upgrade</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 relative">
                {/* Cover Image */}
                <div className="h-64 w-full bg-cover bg-center relative"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button className="absolute bottom-4 right-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">edit</span> Edit Cover
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
                            <button className="px-6 py-2.5 rounded-lg border-2 border-black/10 dark:border-white/10 font-bold text-[#1c0d11] dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Message</button>
                            <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Follow</button>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-8 mb-8 border-b border-black/10 dark:border-white/10 pb-6">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">1.2k</span>
                            <span className="text-black/60 dark:text-white/60">Posts</span>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">45.8k</span>
                            <span className="text-black/60 dark:text-white/60">Followers</span>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl font-bold text-[#1c0d11] dark:text-white/90">1,024</span>
                            <span className="text-black/60 dark:text-white/60">Following</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-8 mb-8">
                        <button className="pb-2 border-b-2 border-primary text-primary font-bold">Posts</button>
                        <button className="pb-2 border-b-2 border-transparent text-black/60 dark:text-white/60 font-medium hover:text-[#1c0d11] dark:hover:text-white/90 transition-colors">About</button>
                        <button className="pb-2 border-b-2 border-transparent text-black/60 dark:text-white/60 font-medium hover:text-[#1c0d11] dark:hover:text-white/90 transition-colors">Friends</button>
                        <button className="pb-2 border-b-2 border-transparent text-black/60 dark:text-white/60 font-medium hover:text-[#1c0d11] dark:hover:text-white/90 transition-colors">Photos</button>
                    </div>

                    {/* Grid Content */}
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
                </div>
            </main>
        </div>
    );
}

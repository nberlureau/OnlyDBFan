import React from 'react';

export default function Explore() {
    return (
        <div className="font-display bg-transparent text-gray-100 h-screen w-full flex flex-col overflow-hidden relative">
            <div className="flex h-full w-full">
                <div className="flex flex-1">
                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto">
                        <div className="mx-auto max-w-4xl px-8 py-6">
                            {/* Top Bar with Search */}
                            <header className="flex h-12 items-center justify-between pb-6">
                                <h2 className="text-white/90 text-2xl font-bold leading-tight tracking-[-0.015em]">Explorer
                                </h2>
                                <div className="flex items-center gap-4">
                                    <button
                                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-white/5 text-white/90 hover:bg-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-xl">notifications</span>
                                    </button>
                                    <button
                                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-white/5 text-white/90 hover:bg-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-xl">dark_mode</span>
                                    </button>
                                </div>
                            </header>
                            {/* SearchBar */}
                            <div className="mb-6">
                                <label className="flex flex-col min-w-40 h-14 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white/5">
                                        <div className="text-[#9c4962] dark:text-white/60 flex items-center justify-center pl-4">
                                            <span className="material-symbols-outlined text-2xl">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#1c0d11] dark:text-white/90 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#9c4962] dark:placeholder:text-white/60 px-4 pl-2 text-base font-normal leading-normal"
                                            placeholder="Rechercher des photos, vidéos ou comptes..." defaultValue="" />
                                    </div>
                                </label>
                            </div>
                            {/* Chips */}
                            <div className="flex gap-3 mb-6">
                                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4">
                                    <p className="text-white text-sm font-medium leading-normal">Pour vous</p>
                                </button>
                                <button
                                    className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-4 transition-colors">
                                    <p className="text-[#1c0d11] dark:text-white/90 text-sm font-medium leading-normal">Top</p>
                                </button>
                                <button
                                    className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-4 transition-colors">
                                    <p className="text-[#1c0d11] dark:text-white/90 text-sm font-medium leading-normal">Photos</p>
                                </button>
                                <button
                                    className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-4 transition-colors">
                                    <p className="text-[#1c0d11] dark:text-white/90 text-sm font-medium leading-normal">Vidéos</p>
                                </button>
                                <button
                                    className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-4 transition-colors">
                                    <p className="text-[#1c0d11] dark:text-white/90 text-sm font-medium leading-normal">Comptes</p>
                                </button>
                            </div>
                            {/* ImageGrid */}
                            <div className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A modern laptop on a desk showing code on the screen."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A retro gaming setup with a colorful neon glow."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBNz_5a9wdouyYRO4nasBPOZgZ2E45OhKnVguus3y0egEVwFYuh19p8nk4Wf2KGV4jpCAKQVqjvZbC2qEWGZ6vEAvPH4lE31M-podPFlkYbTy2WgLpsg8ySRnApvzYRMeLtIzhzFQ-r-7eVeAR1-TjfZM3kRW06aLst02CRiNoWGoFCLikLCL7_qZs0kl1TRd6OODub7Wvvaq2GbpZth_U62ZmiVj5yusYBe_HGAv2Mgnmo2c8lW3fxOXraWe3mbqkKXMoHdXbMaP" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A minimalist workspace with a tablet and keyboard."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00zQVVVPK1guDl6ieqJqwnV0WfEZBgvoDgLXQ6ckJwGFNlpnG3d8Y_FKsCoq4ZNsbA7ZqnZBwcCRb_-Bjzz1aMCE_qIWAdrYh3-IqszG4QTSo-cRlp6rHjx1waM_-4nsBnMx0VaGqPxpz8TV5k4LidIHCxCtlNhKWO3-gcEF1eKDb9xKKtozpt-QIFKEwXFvemfXSM_8SeKpXsGloQ3mMXGze5oaSS54C4-B2mMU1heSMRxNjBDsp4N0ym19aG1Gi-_CQLTW4vjm5" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="Green matrix code flowing down a screen."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvnriDnv2hkQJY1X69LxuUmwA_2Nrl6mc_4eVDZYsXP2r_nYVTvhAATVEGyq6F7K4Yvpr_SbDFVjaJYtpdF2i1J0QmLM9hvxNyDTO_LaBMObOaXLbIx9_h1H6R7hjBiNvPVcoFNKBKJg3BpOiPLmvtDbeDE3h_sCT63FmFtQx01SSHvyHCGINK3fTQJz0vnCjxirbI1OMGauFcYUio2dAsdA1CrkcaK18-6aEHrvgA0kXX2xd0RB4FNtoLHIbNnoIl93wCZAgsWui" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="Close-up of HTML code on a computer screen."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXjCw9Gz3XLbydWWat6Vy4x1toG9ffCyu8-hD0d0IBIBpbdr53DosSETb7Gb5tre67P4JoG-tG3nBoVaWrxAV4F165hfIelJ3oxU2dmmOzSJgab6WgyfcgsNFlZTJct2r9c1-0MVcsTjC5pRm3s_vKBLwa8PgWnoOKfCMZ20Lx_UcxAUEsvVzcS-ReiO5KNNFCZ3ugrN5uK8c059gIDGLPcfv_hxj-T_wKir3ZnPbvPD1Ij9W694DWq_XdAWUaKvxFfISmL-cSeCm0" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A person coding on a laptop in a coffee shop."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9CI0FrVyctmdxDeOwtl9Zc-tffoKZcJRS6ld7xphtg_DPgXmGn9c9UAVS9HPq8g8LzzV9ihrvVzjgGJuyt8hjJO5Ld9SuKDZtXuZEWiOiUTwO4zwD2GMSgbuI4wMzQnjPomZnRiihbH9ZXuU8UXH57LADtdVcslahE66BBgepoLN0OoL8szIzaOikl2VUxq51CIJHPjVPPpH2Lz2sSiXeOmVfRheQxoft8YJABF_U8diWWxPwiYttx3YjUJfnn-Z4bb1CreyAi6g" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A desk with multiple monitors showing programming code."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1UjZhA2J9FfrWI9DN30grwN3UwvNGv9PuTpI0gWBL-GkmCrWgQV9J_6e2bodi4cFN7KMaqDAB4xurdFdmCP4urfVyxukkPtrHN4VmDdcK1yt8RgK3O1uygJoL4SUu6CfLU1fJtOq5FDWAN7tfH9O510-oTnq2igS__vM-1Ms1LdiZIm7Xsye5nIzulM2fAczZYZt4sNOPCOGZa4BM2VOqCAo5zaZ7g1yLa81N_rFkJU1TuT-LK5XzHAg5LkocG9qwrqx1B2smJMOR" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img className="w-full" data-alt="A team of developers collaborating around a table."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJapfuViRPjMwLieZKCy--co-FekasIfSr_xNY4g2PTU87jDDOjdyQgWLtUrvtiWUOdv_02L55hff1Yjx5YLII_FGtVKK09axCzpWlYb1xduIxsKkGWUELX2zZk9GGO4w5ceBpn0E2WzLcDfvTE-_VYJxFsmerebS1-Cwm__wyu41_sVJiasH5fO3kZvFRv0fmaDvtV4eU3TM_tZlckY2x8OQG2vYKq2jCU6IVhhHSOhd4fXhOmVEF7U9MgWq-h58dzDajsYUp9iF" />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">favorite</span></button>
                                            <button
                                                className="bg-white/20 backdrop-blur-sm text-white rounded-full size-8 flex items-center justify-center hover:bg-white/30 transition-colors"><span
                                                    className="material-symbols-outlined text-lg">bookmark</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* Right Sidebar */}
                    <aside className="w-80 border-l border-white/10 p-6 flex-col gap-8 hidden lg:flex">
                        <div className="bg-white/5 rounded-lg p-4">
                            <h3 className="font-bold text-lg mb-4 text-[#1c0d11] dark:text-white/90">Créateurs suggérés</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                        data-alt="User avatar of Liam"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-[#1c0d11] dark:text-white/90">Liam</p>
                                        <p className="text-xs text-[#9c4962] dark:text-white/60">@liam_designs</p>
                                    </div>
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-xs font-bold transition-transform hover:scale-105">Suivre</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                        data-alt="User avatar of Olivia"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6uIYfXF1Z_lt71vGsOksTBB-5FTb-naLi7OgqA1kI7O_eZoNf3OXowRQKNDjB3sUspW3o8P09N81A31WH6UJJwA4zKKHJrf2tqjxYOWhxvsNs-r3QNZ8zDG9PrHcDM_QdPD-udXcdwqoaEX9dkW_Tmy7JUDV09TVPQG2H_XZinny61B1k3wRRMAVX2z-Qo5ELw5sBoPUj4e4EEDWXUTYfELvctAEwaOj2Mf2GU5an-FJvYKpY5AWwWtZHdyaL9e3iRAuCF0vE6nRV")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-[#1c0d11] dark:text-white/90">Olivia</p>
                                        <p className="text-xs text-[#9c4962] dark:text-white/60">@olivia_codes</p>
                                    </div>
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-xs font-bold transition-transform hover:scale-105">Suivre</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                        data-alt="User avatar of Noah"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWCMnpx72MPJTfTL8izdPBqG24HCXJ-M7nf7Uelnfeqmdf_92anzn8_O8MViZ4sqMN0Cf6km1Rcpw9IHiylNdhTapH1DKcHchcnrJhlSl13XHEoZpv-nPxDUKbHuxL6zH3vLkfHmgUvQOod5tfTIhytj1jBbDEoqEjHDYD1Ws287qaAVHQaLAKYtsEldqh5-R-o0-lvHndurY97eGVA2flO6SHPwJGJPCU5fo6IKhbg9IBhVXH524yKJXHYdr-xpoeeWSDlMx2Qbsf")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm text-[#1c0d11] dark:text-white/90">Noah</p>
                                        <p className="text-xs text-[#9c4962] dark:text-white/60">@noah_art</p>
                                    </div>
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-xs font-bold transition-transform hover:scale-105">Suivre</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                            <h3 className="font-bold text-lg mb-4 text-[#1c0d11] dark:text-white/90">Tendances</h3>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#uidesign</p>
                                    <p className="text-xs text-[#9c4962] dark:text-white/60">125k posts</p>
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#webdev</p>
                                    <p className="text-xs text-[#9c4962] dark:text-white/60">98k posts</p>
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-primary hover:underline cursor-pointer">#digitalart</p>
                                    <p className="text-xs text-[#9c4962] dark:text-white/60">82k posts</p>
                                </div>
                                <div>
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

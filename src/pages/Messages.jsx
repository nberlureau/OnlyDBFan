import React from 'react';

export default function Messages() {
    return (
        <div className="font-display bg-transparent text-gray-100 h-screen min-h-[700px] w-full flex overflow-hidden">
            {/* SideNavBar (Collapsed/Mini version for Messages page as per design) */}
            <aside className="flex w-20 flex-col items-center gap-8 border-r border-white/10 py-6 bg-[#050816] pt-[72px] h-full fixed top-0 left-0 z-40">
                <div className="flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                </div>
                <div className="flex flex-col gap-6 w-full items-center">
                    <a className="p-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                        href="/">
                        <span className="material-symbols-outlined text-2xl">home</span>
                    </a>
                    <a className="p-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                        href="/explore">
                        <span className="material-symbols-outlined text-2xl">explore</span>
                    </a>
                    <a className="p-3 rounded-xl bg-primary/10 text-primary" href="/messages">
                        <span className="material-symbols-outlined text-2xl fill" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    </a>
                    <a className="p-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                        href="/notifications">
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                    </a>
                    <a className="p-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                        href="/profile">
                        <span className="material-symbols-outlined text-2xl">person</span>
                    </a>
                </div>
                <div className="mt-auto">
                    <a className="p-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                        href="/settings">
                        <span className="material-symbols-outlined text-2xl">settings</span>
                    </a>
                </div>
            </aside>

            {/* Conversation List */}
            <div className="w-80 border-r border-white/10 flex flex-col bg-[#050816] ml-20 pt-[72px]">
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Messages</h2>
                        <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-primary">
                            <span className="material-symbols-outlined">edit_square</span>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">search</span>
                        <input
                            className="w-full bg-white/5 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-white/40 text-white/90"
                            placeholder="Search messages" type="text" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-2">
                        {/* Active Chat */}
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 cursor-pointer">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                                </div>
                                <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#1c0d11] rounded-full"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold truncate">Liam Designs</h3>
                                    <span className="text-xs text-primary font-medium">2m</span>
                                </div>
                                <p className="text-sm text-black/60 dark:text-white/60 truncate">Sure, I can send over the files later today.</p>
                            </div>
                        </div>
                        {/* Other Chats */}
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6uIYfXF1Z_lt71vGsOksTBB-5FTb-naLi7OgqA1kI7O_eZoNf3OXowRQKNDjB3sUspW3o8P09N81A31WH6UJJwA4zKKHJrf2tqjxYOWhxvsNs-r3QNZ8zDG9PrHcDM_QdPD-udXcdwqoaEX9dkW_Tmy7JUDV09TVPQG2H_XZinny61B1k3wRRMAVX2z-Qo5ELw5sBoPUj4e4EEDWXUTYfELvctAEwaOj2Mf2GU5an-FJvYKpY5AWwWtZHdyaL9e3iRAuCF0vE6nRV")' }}>
                                </div>
                                <span className="absolute bottom-0 right-0 size-3 bg-gray-400 border-2 border-white dark:border-[#1c0d11] rounded-full"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold truncate">Olivia Codes</h3>
                                    <span className="text-xs text-black/40 dark:text-white/40">1h</span>
                                </div>
                                <p className="text-sm text-black/60 dark:text-white/60 truncate">Did you see the new update?</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWCMnpx72MPJTfTL8izdPBqG24HCXJ-M7nf7Uelnfeqmdf_92anzn8_O8MViZ4sqMN0Cf6km1Rcpw9IHiylNdhTapH1DKcHchcnrJhlSl13XHEoZpv-nPxDUKbHuxL6zH3vLkfHmgUvQOod5tfTIhytj1jBbDEoqEjHDYD1Ws287qaAVHQaLAKYtsEldqh5-R-o0-lvHndurY97eGVA2flO6SHPwJGJPCU5fo6IKhbg9IBhVXH524yKJXHYdr-xpoeeWSDlMx2Qbsf")' }}>
                                </div>
                                <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#1c0d11] rounded-full"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold truncate">Noah Art</h3>
                                    <span className="text-xs text-black/40 dark:text-white/40">3h</span>
                                </div>
                                <p className="text-sm text-black/60 dark:text-white/60 truncate font-medium text-[#1c0d11] dark:text-white/90">Thanks for the feedback!</p>
                            </div>
                            <div className="size-2 bg-primary rounded-full"></div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXci3pwhqRRqvK438EZjalQqJA9IHl55VxD0ggO5VzE0aT9KbVuHZagFwvTCEkZ_U6CegGCyM_uxtK3UIbQB5VXByhv3qOVUeEwSlF6g05zfj25TRQ_MOp238QlYS3BNuvJYONFBaRqKmABGpGob5XTxFoL5o3RZ3uR7-em8K9_IJsGoN-6CnugOylyWIBgnr2sykiYxJ6tWragp_8T0y0U5CKtm7CYMTDBvTnGh7NBIC01_LWpEZTxC2ELTY_3C6e4VX7RhVtlXTc")' }}>
                                </div>
                                <span className="absolute bottom-0 right-0 size-3 bg-gray-400 border-2 border-white dark:border-[#1c0d11] rounded-full"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold truncate">Sofia Chen</h3>
                                    <span className="text-xs text-black/40 dark:text-white/40">1d</span>
                                </div>
                                <p className="text-sm text-black/60 dark:text-white/60 truncate">Let's meet up next week.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-transparent pt-[72px]">
                {/* Chat Header */}
                <header className="h-20 border-b border-white/10 flex items-center justify-between px-6 bg-[#050816]">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                            </div>
                            <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white dark:border-[#1c0d11] rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Liam Designs</h3>
                            <p className="text-xs text-green-500 font-medium">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-primary">
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined">call</span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined">videocam</span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined">info</span>
                        </button>
                    </div>
                </header>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                    <div className="flex justify-center mb-4">
                        <span className="text-xs text-black/40 dark:text-white/40 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">Today</span>
                    </div>

                    {/* Message Received */}
                    <div className="flex gap-3 max-w-[70%]">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mt-auto shrink-0"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="bg-[#151a30] p-3 rounded-2xl rounded-bl-none shadow-sm border border-white/5">
                                <p className="text-white/90">Hey! How's the project coming along?</p>
                            </div>
                            <span className="text-xs text-black/40 dark:text-white/40 ml-2">10:30 AM</span>
                        </div>
                    </div>

                    {/* Message Sent */}
                    <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
                        <div className="flex flex-col gap-1 items-end">
                            <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none shadow-md">
                                <p>It's going great! I've just finished the main layout.</p>
                            </div>
                            <span className="text-xs text-black/40 dark:text-white/40 mr-2">10:32 AM</span>
                        </div>
                    </div>

                    {/* Message Received */}
                    <div className="flex gap-3 max-w-[70%]">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mt-auto shrink-0"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="bg-[#151a30] p-3 rounded-2xl rounded-bl-none shadow-sm border border-white/5">
                                <p className="text-white/90">That's awesome! Can you send over the files later today?</p>
                            </div>
                            <span className="text-xs text-black/40 dark:text-white/40 ml-2">10:33 AM</span>
                        </div>
                    </div>

                    {/* Message Sent */}
                    <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
                        <div className="flex flex-col gap-1 items-end">
                            <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none shadow-md">
                                <p>Sure, I can send over the files later today.</p>
                            </div>
                            <div className="flex items-center gap-1 mr-2">
                                <span className="text-xs text-black/40 dark:text-white/40">10:35 AM</span>
                                <span className="material-symbols-outlined text-xs text-primary">done_all</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#050816] border-t border-white/10">
                    <div className="flex items-end gap-3 bg-white/5 rounded-2xl p-2">
                        <button className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <textarea
                            className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[44px] py-2.5 focus:ring-0 text-white/90 placeholder:text-white/40"
                            placeholder="Type a message..." rows="1"></textarea>
                        <button className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">mood</span>
                        </button>
                        <button className="p-2 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* User Info Panel (Right Sidebar) */}
            <div className="w-72 border-l border-white/10 bg-[#050816] hidden xl:flex flex-col p-6 overflow-y-auto pt-[72px]">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                    </div>
                    <h2 className="text-xl font-bold text-[#1c0d11] dark:text-white/90">Liam Designs</h2>
                    <p className="text-sm text-black/60 dark:text-white/60">@liam_designs</p>
                </div>

                <div className="flex justify-around mb-8">
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-black/5 dark:bg-white/5 rounded-full mb-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">person</span>
                        </button>
                        <span className="text-xs font-medium">Profile</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-black/5 dark:bg-white/5 rounded-full mb-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">notifications_off</span>
                        </button>
                        <span className="text-xs font-medium">Mute</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-black/5 dark:bg-white/5 rounded-full mb-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">search</span>
                        </button>
                        <span className="text-xs font-medium">Search</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between cursor-pointer group">
                        <h3 className="font-bold text-sm text-black/60 dark:text-white/60 group-hover:text-primary transition-colors">Media, Files & Links</h3>
                        <span className="material-symbols-outlined text-black/40 dark:text-white/40 group-hover:text-primary transition-colors">chevron_right</span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5G1BedjcAY76ZKGAgKITkpDpRJzH3di4iwP7ENEGWOIbLWpsFSX6To0K49l7UsJTYiZpeR4di0YrPeMegZ7TDhfJXkj546ftssOTx0FhpKl3PO1cuKA22_jk74jfsyGK0ybUo6WUw-34TkS2s9-1yOyArwWE3Pi5d6i_Q9o2Svp2Nrz1ZdpXX6oGP0uziQ_EKXl9Mm7XInN6xQ9j1OwGfH7rFbnbpHNexQpXF69WOSxuW63K391tr23QN1agTAxshy7eMkBVhhn_r" />
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg" />
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBNz_5a9wdouyYRO4nasBPOZgZ2E45OhKnVguus3y0egEVwFYuh19p8nk4Wf2KGV4jpCAKQVqjvZbC2qEWGZ6vEAvPH4lE31M-podPFlkYbTy2WgLpsg8ySRnApvzYRMeLtIzhzFQ-r-7eVeAR1-TjfZM3kRW06aLst02CRiNoWGoFCLikLCL7_qZs0kl1TRd6OODub7Wvvaq2GbpZth_U62ZmiVj5yusYBe_HGAv2Mgnmo2c8lW3fxOXraWe3mbqkKXMoHdXbMaP" />
                    </div>

                    <div className="flex items-center justify-between cursor-pointer group mt-2">
                        <h3 className="font-bold text-sm text-black/60 dark:text-white/60 group-hover:text-primary transition-colors">Privacy & Support</h3>
                        <span className="material-symbols-outlined text-black/40 dark:text-white/40 group-hover:text-primary transition-colors">chevron_right</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

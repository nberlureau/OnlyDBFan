import React from 'react';

export default function Home() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen">
            {/* Main Content */}
            <div className="flex-1">
                {/* Page Content Grid */}
                <main className="grid grid-cols-12 gap-8 px-8 py-6">
                    {/* Center Column: Feed */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                        {/* Composer */}
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <div className="flex gap-4">
                                <img className="size-12 rounded-full shrink-0" data-alt="User avatar Jane Doe"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKAP-N51JKRv4siJBUiRmGuBd-W9Kj6aSOmyQxQU5pWQ5T5-kzqWuSOUnMiC5oPONC6T5xpHqLXxBmMjd-X0D20nCRUmBY0yrylaamyNpc-qvy7FRzLER-_mEXlny6LvC5xS4_ixlHWmaiYrbKHxo3oXzBCGubh4ubdgEvfuhEbB1qOZi2yn8E9uMhVI2SJ8Er2C2WvIsvry9K8Q7k7-L6vPSHIr0Cb52JMsiRArhYKPOjdfo-QS53t3UcK5n1lo6gu0ij3kVJTfZ" />
                                <div className="w-full">
                                    <textarea
                                        className="form-input w-full min-h-[60px] resize-none rounded-lg border-none bg-transparent p-0 text-lg placeholder:text-[#a14560] dark:placeholder:text-gray-500 focus:ring-0 text-[#1d0c11] dark:text-gray-300"
                                        placeholder="Share something with your friends…"></textarea>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2 text-[#a14560] dark:text-gray-400">
                                            <button className="p-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"><span
                                                className="material-symbols-outlined">image</span></button>
                                            <button className="p-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"><span
                                                className="material-symbols-outlined">gif_box</span></button>
                                            <button className="p-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"><span
                                                className="material-symbols-outlined">mood</span></button>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <select
                                                    className="form-select appearance-none rounded-full border-none bg-primary-home/10 dark:bg-primary-home/20 py-1.5 pl-3 pr-8 text-sm font-medium text-[#1d0c11] dark:text-gray-300 focus:ring-2 focus:ring-primary-home/50">
                                                    <option>Public</option>
                                                    <option>Friends</option>
                                                    <option>Private</option>
                                                </select>
                                                <span
                                                    className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm">expand_more</span>
                                            </div>
                                            <button
                                                className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] text-white text-sm font-bold leading-normal">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Feed Post Card 1 */}
                        <div className="bg-white/5 rounded-lg shadow-sm border border-white/10">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Olivia Wilson"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2oHCupr_M10jx-2Ka54_SeU_ekCDAxpNkmJhdVrIEVkN1pJ6ZOkLktu5stZFyLpr13PVlBJQQqS5yR_2vVa6QTDK0n9ghsF7KXOpDhpNDEOQu9vFM-l3oP6H4rxw6C-OiRA4km52p_lxGH80kfS00PYmZkt9PNJiJVDu6FPt48ycvs1dRLd3pv_zN7OVT1duOZiPgjuifpCpCf4xFukD9WM5HXt9ED6U7B1WhGjyzdqFBcXep6CPSMqEr1au6eTyiqeTpvtaVjz7" />
                                    <div>
                                        <p className="font-bold text-[#1d0c11] dark:text-white">Olivia Wilson</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">2 hours ago</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-[#1d0c11] dark:text-gray-300">Just enjoying the beautiful sunset today! Feeling so
                                    grateful for moments like these. #sunset #grateful</p>
                            </div>
                            <img className="w-full h-auto" data-alt="A beautiful sunset over a rolling green hill"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5G1BedjcAY76ZKGAgKITkpDpRJzH3di4iwP7ENEGWOIbLWpsFSX6To0K49l7UsJTYiZpeR4di0YrPeMegZ7TDhfJXkj546ftssOTx0FhpKl3PO1cuKA22_jk74jfsyGK0ybUo6WUw-34TkS2s9-1yOyArwWE3Pi5d6i_Q9o2Svp2Nrz1ZdpXX6oGP0uziQ_EKXl9Mm7XInN6xQ9j1OwGfH7rFbnbpHNexQpXF69WOSxuW63K391tr23QN1agTAxshy7eMkBVhhn_r" />
                            {/* Reaction Bar */}
                            <div className="flex justify-around items-center p-2 border-t border-[#eacdd6] dark:border-gray-800">
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] text-transparent bg-clip-text" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    <span className="text-sm font-bold">1.2k</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">chat_bubble</span>
                                    <span className="text-sm font-bold">89</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">repeat</span>
                                    <span className="text-sm font-bold">45</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">bookmark</span>
                                </button>
                            </div>
                            <div className="p-4 border-t border-[#eacdd6] dark:border-gray-800 text-sm">
                                <p><strong className="dark:text-white">liam_miller</strong> Love this shot! So peaceful.</p>
                            </div>
                        </div>
                        {/* Feed Post Card 2 */}
                        <div className="bg-white/5 rounded-lg shadow-sm border border-white/10">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Noah Carter"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZ5DVWPr7Q9ZqkXxAo4h1_Cqf4A7OISL0xN3GptFW9h-z4h34h0v24n0isdWs7XIzKHiePrqcnamjPMprQcdGL0J5p37CQBWaQrQXZ8LMx-G7BXbyfFbcZ7NY9atvguOj7-EptgosRJYR9MlNBr5cIW7wk2yRqSc_mShZqtWLMznr0zyYmR-pQjYdby5fzSKZJ4rH8REE2MMHr33oqBFkI6YqR4DLc3ZMv4t2CLbeyGw5fRtbdRyffYbgREI29UhcnHeQUL5clkEd" />
                                    <div>
                                        <p className="font-bold text-[#1d0c11] dark:text-white">Noah Carter</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">5 hours ago</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-[#1d0c11] dark:text-gray-300">New blog post is up! Check out my thoughts on the latest
                                    design trends for 2024. Link in bio! #design #webdesign #trends</p>
                            </div>
                            {/* Reaction Bar */}
                            <div className="flex justify-around items-center p-2 border-t border-[#eacdd6] dark:border-gray-800">
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">favorite</span>
                                    <span className="text-sm font-bold">567</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">chat_bubble</span>
                                    <span className="text-sm font-bold">32</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">repeat</span>
                                    <span className="text-sm font-bold">12</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400">
                                    <span className="material-symbols-outlined">bookmark</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Suggestions & Trends */}
                    <aside className="col-span-12 lg:col-span-5 hidden lg:flex flex-col gap-6">
                        {/* Suggested Users */}
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Suggested for you</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Sophia Chen"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXci3pwhqRRqvK438EZjalQqJA9IHl55VxD0ggO5VzE0aT9KbVuHZagFwvTCEkZ_U6CegGCyM_uxtK3UIbQB5VXByhv3qOVUeEwSlF6g05zfj25TRQ_MOp238QlYS3BNuvJYONFBaRqKmABGpGob5XTxFoL5o3RZ3uR7-em8K9_IJsGoN-6CnugOylyWIBgnr2sykiYxJ6tWragp_8T0y0U5CKtm7CYMTDBvTnGh7NBIC01_LWpEZTxC2ELTY_3C6e4VX7RhVtlXTc" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Sophia Chen</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@sophiachen</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b]">Follow</button>
                                </div>
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Liam Miller"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBePat6c9R6ELn80nYYI66yZmxNdo3r26N0SezbRPeN9gXnaO4jfKky-krrshAMO3e3hYVKix0h0Z_8ohaKPu9wCA5ikseUZkLiEvTDBuij4NzL02D409xgRZZkmg8zpImT7t7VJoa2odWNOAVGXi7Pgi5TNyZ0RpY9yhh_JSAJXBO9jw1Fs6E0_O48tKM9xjuJ2658h4k4PziX1p5LLZYBLjqer_rOnXYQCg-FICjGfR1m3t_moa7Fh6UlaHyhQ4V8_lMX1J96INhm" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Liam Miller</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@liam_miller</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b]">Follow</button>
                                </div>
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Ava Garcia"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijCD_yF1AI_ilqdb8Dedu5QF6BVtoSNU9-qpjxCWdxk8KeQbaPos-DIk_pA2pttgp6aI9ty38hb6vQA_mer0eanxzp4mDCS6_7FCfI718yVICtARfurax5IM2bjJ--ahkn2_zfZv7eSjo9zqmORNPuus7SIRoUQOA1O0QRCndlwvxd2TVu9Yw55Ntf4k1MeQxxCytcqdZ0hBRCB9-nMZU1ihXKdGvyYBrRtmAuHnFn4peac44H7OlPU7WMgqWVtkO3jWMxfZ4i1ax" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Ava Garcia</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@avagarcia</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b]">Follow</button>
                                </div>
                            </div>
                        </div>
                        {/* Trending Tags */}
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Trending Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">#photography</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">#uidesign</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">#travelgram</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">#foodie</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">#inspiration</span>
                            </div>
                        </div>
                        {/* Recent Activity */}
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Recent Activity</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 mt-1">person_add</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Liam
                                        Miller</strong> followed you. <span className="text-[#a14560] dark:text-gray-400">10m ago</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-home mt-1">favorite</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Sophia
                                        Chen</strong> liked your photo. <span className="text-[#a14560] dark:text-gray-400">30m ago</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-blue-500 mt-1">comment</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Noah
                                        Carter</strong> commented: "Great insights!". <span className="text-[#a14560] dark:text-gray-400">1h
                                            ago</span></p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
}

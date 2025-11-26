import React from 'react';

export default function Home() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* SideNavBar */}
            <aside className="fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-[#050816] p-4 border-r border-white/10">
                <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 p-3 mb-6">
                        <div className="size-8">
                            <svg className="text-primary-home" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                                    fill="currentColor"></path>
                                <path clipRule="evenodd"
                                    d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                                    fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-white">Socially</h1>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-4 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] text-white" href="#">
                            <span className="material-symbols-outlined !text-white" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                            <span className="text-base font-bold">Home</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-2.5 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"
                            href="/explore">
                            <span className="material-symbols-outlined text-[#1d0c11] dark:text-gray-300">explore</span>
                            <span className="text-base font-medium">Explore</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-2.5 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"
                            href="/notifications">
                            <span className="material-symbols-outlined text-[#1d0c11] dark:text-gray-300">notifications</span>
                            <span className="text-base font-medium">Notifications</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-2.5 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"
                            href="/messages">
                            <span className="material-symbols-outlined text-[#1d0c11] dark:text-gray-300">chat_bubble</span>
                            <span className="text-base font-medium">Messages</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-2.5 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20"
                            href="/profile">
                            <span className="material-symbols-outlined text-[#1d0c11] dark:text-gray-300">person</span>
                            <span className="text-base font-medium">Profile</span>
                        </a>
                    </nav>
                    <div className="mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                data-alt="User avatar of Jane Doe"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARwvp6wZ9AaBjpP3nWjl_4kzuAv3G4zTkCfwZ8sjiBTJ5pcIu9blkPSk9L0T6rTNB5wflfMQomBH7_XazHoXImxPbjad0TxGVBc8GgYrT587m59AxRkL6bxkl4TEJPncoDFtB0HuIRBWwD3G3ZggHD_gTnhg5XBKXPDoLwTATo6eVWnfwX3lg58qQzzRhiyEsXU36hlI-9NqyhES2l0QTequaqEwPXRT8iKbeDWTAVZVBm1_JvSLSRQWpsVzKsoLENoOBjukAKNwYD")' }}>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-[#1d0c11] dark:text-white text-base font-medium leading-normal">Jane Doe</h2>
                                <p className="text-[#a14560] dark:text-gray-400 text-sm font-normal leading-normal">@janedoe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Main Content */}
            <div className="ml-64 flex-1">
                {/* TopNavBar */}
                <header
                    className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-white/10 px-8 py-3 bg-[#050816]/80 backdrop-blur-sm">
                    <h2 className="text-white text-xl font-bold leading-tight">Home</h2>
                    <div className="flex-1 max-w-md mx-auto">
                        <label className="relative">
                            <span
                                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#a14560] dark:text-gray-400">search</span>
                            <input
                                className="w-full rounded-full border-none bg-primary-home/10 dark:bg-primary-home/20 h-10 pl-12 pr-4 placeholder:text-[#a14560] dark:placeholder:text-gray-400 focus:ring-2 focus:ring-primary-home/50 text-[#1d0c11] dark:text-white"
                                placeholder="Search..." type="search" />
                        </label>
                    </div>
                    <div className="w-24"></div> {/* Spacer */}
                </header>
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

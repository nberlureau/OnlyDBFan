import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import FeedPost from '../components/FeedPost';

export default function Home() {
    const { posts, addPost, currentUser } = useData();
    const [newPostContent, setNewPostContent] = useState('');
    const [privacy, setPrivacy] = useState('Public');

    const handlePublish = () => {
        if (!newPostContent.trim()) return;
        addPost(newPostContent, null); // Image handling could be added later
        setNewPostContent('');
    };

    return (
        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 min-h-screen">
            <div className="flex-1">
                <main className="grid grid-cols-12 gap-8 px-8 py-6">
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                        {/* Composer */}
                        <div className="bg-white dark:bg-white/5 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-white/10">
                            <div className="flex gap-4">
                                <img className="size-12 rounded-full shrink-0 object-cover" data-alt="User avatar"
                                    src={currentUser?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuAVKAP-N51JKRv4siJBUiRmGuBd-W9Kj6aSOmyQxQU5pWQ5T5-kzqWuSOUnMiC5oPONC6T5xpHqLXxBmMjd-X0D20nCRUmBY0yrylaamyNpc-qvy7FRzLER-_mEXlny6LvC5xS4_ixlHWmaiYrbKHxo3oXzBCGubh4ubdgEvfuhEbB1qOZi2yn8E9uMhVI2SJ8Er2C2WvIsvry9K8Q7k7-L6vPSHIr0Cb52JMsiRArhYKPOjdfo-QS53t3UcK5n1lo6gu0ij3kVJTfZ"} />
                                <div className="w-full">
                                    <textarea
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                        className="form-input w-full min-h-[60px] resize-none rounded-lg border-none bg-transparent p-0 text-lg placeholder:text-[#a14560] dark:placeholder:text-gray-500 focus:ring-0 text-[#1d0c11] dark:text-gray-300"
                                        placeholder={`Quoi de neuf, ${currentUser?.name.split(' ')[0] || "invité"} ?`}></textarea>
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
                                                    value={privacy}
                                                    onChange={(e) => setPrivacy(e.target.value)}
                                                    className="form-select appearance-none rounded-full border-none bg-primary-home/10 dark:bg-primary-home/20 py-1.5 pl-3 pr-8 text-sm font-medium text-[#1d0c11] dark:text-gray-300 focus:ring-2 focus:ring-primary-home/50 cursor-pointer">
                                                    <option>Public</option>
                                                    <option>Amis</option>
                                                    <option>Privé</option>
                                                </select>
                                                <span
                                                    className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm">expand_more</span>
                                            </div>
                                            <button
                                                onClick={handlePublish}
                                                disabled={!newPostContent.trim()}
                                                className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] text-white text-sm font-bold leading-normal disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-md">
                                                Publier
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feed Posts from Context */}
                        <div className="flex flex-col gap-6">
                            {posts.map(post => (
                                <FeedPost key={post.id} post={post} />
                            ))}
                        </div>

                    </div>
                    {/* Right Column: Suggestions & Trends */}
                    <aside className="col-span-12 lg:col-span-5 hidden lg:flex flex-col gap-6">
                        <div className="bg-white dark:bg-white/5 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Suggestions pour vous</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Sophia Chen"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXci3pwhqRRqvK438EZjalQqJA9IHl55VxD0ggO5VzE0aT9KbVuHZagFwvTCEkZ_U6CegGCyM_uxtK3UIbQB5VXByhv3qOVUeEwSlF6g05zfj25TRQ_MOp238QlYS3BNuvJYONFBaRqKmABGpGob5XTxFoL5o3RZ3uR7-em8K9_IJsGoN-6CnugOylyWIBgnr2sykiYxJ6tWragp_8T0y0U5CKtm7CYMTDBvTnGh7NBIC01_LWpEZTxC2ELTY_3C6e4VX7RhVtlXTc" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Sophia Chen</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@sophiachen</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] hover:opacity-90 transition-opacity">Suivre</button>
                                </div>
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Liam Miller"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBePat6c9R6ELn80nYYI66yZmxNdo3r26N0SezbRPeN9gXnaO4jfKky-krrshAMO3e3hYVKix0h0Z_8ohaKPu9wCA5ikseUZkLiEvTDBuij4NzL02D409xgRZZkmg8zpImT7t7VJoa2odWNOAVGXi7Pgi5TNyZ0RpY9yhh_JSAJXBO9jw1Fs6E0_O48tKM9xjuJ2658h4k4PziX1p5LLZYBLjqer_rOnXYQCg-FICjGfR1m3t_moa7Fh6UlaHyhQ4V8_lMX1J96INhm" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Liam Miller</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@liam_miller</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] hover:opacity-90 transition-opacity">Suivre</button>
                                </div>
                                <div className="flex items-center">
                                    <img className="size-10 rounded-full" data-alt="Avatar of Ava Garcia"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijCD_yF1AI_ilqdb8Dedu5QF6BVtoSNU9-qpjxCWdxk8KeQbaPos-DIk_pA2pttgp6aI9ty38hb6vQA_mer0eanxzp4mDCS6_7FCfI718yVICtARfurax5IM2bjJ--ahkn2_zfZv7eSjo9zqmORNPuus7SIRoUQOA1O0QRCndlwvxd2TVu9Yw55Ntf4k1MeQxxCytcqdZ0hBRCB9-nMZU1ihXKdGvyYBrRtmAuHnFn4peac44H7OlPU7WMgqWVtkO3jWMxfZ4i1ax" />
                                    <div className="ml-3 flex-1">
                                        <p className="font-semibold text-[#1d0c11] dark:text-white">Ava Garcia</p>
                                        <p className="text-sm text-[#a14560] dark:text-gray-400">@avagarcia</p>
                                    </div>
                                    <button className="rounded-full px-4 h-8 text-sm font-bold text-white bg-gradient-to-r from-[#ff6190] to-[#ff9a8b] hover:opacity-90 transition-opacity">Suivre</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Tendances</h3>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">#photography</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">#uidesign</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 cursor-pointer hover:bg-green-200 dark:hover:bg-green-800 transition-colors">#travelgram</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 cursor-pointer hover:bg-red-200 dark:hover:bg-red-800 transition-colors">#foodie</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 cursor-pointer hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors">#inspiration</span>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg shadow-sm p-4 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-[#1d0c11] dark:text-white">Activité récente</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 mt-1">person_add</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Liam
                                        Miller</strong> vous a suivi. <span className="text-[#a14560] dark:text-gray-400">il y a 10 min</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary-home mt-1">favorite</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Sophia
                                        Chen</strong> a aimé votre photo. <span className="text-[#a14560] dark:text-gray-400">il y a 30 min</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-blue-500 mt-1">comment</span>
                                    <p className="text-sm text-[#1d0c11] dark:text-gray-300"><strong className="dark:text-white">Noah
                                        Carter</strong> a commenté : "Superbes idées !". <span className="text-[#a14560] dark:text-gray-400">il y a 1h</span></p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
}

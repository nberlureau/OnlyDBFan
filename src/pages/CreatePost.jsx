import React from 'react';

export default function CreatePost() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* SideNavBar */}
            <aside className="fixed top-[72px] left-0 h-[calc(100vh-72px)] w-20 lg:w-64 bg-[#050816] border-r border-white/10 flex flex-col justify-between z-20 transition-all duration-300">
                <div className="p-4 lg:p-6">
                    <div className="flex items-center gap-3 mb-10 text-primary justify-center lg:justify-start">
                        <span className="material-symbols-outlined text-4xl">bolt</span>
                        <h1 className="text-2xl font-bold tracking-tight hidden lg:block text-[#1c0d11] dark:text-white/90">SocialApp</h1>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group justify-center lg:justify-start"
                            href="/">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">home</span>
                            <span className="text-base font-medium hidden lg:block">Home</span>
                        </a>
                        <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group justify-center lg:justify-start"
                            href="/explore">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">explore</span>
                            <span className="text-base font-medium hidden lg:block">Explore</span>
                        </a>
                        <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30 justify-center lg:justify-start"
                            href="/create-post">
                            <span className="material-symbols-outlined text-2xl fill" style={{ fontVariationSettings: "'FILL' 1" }}>add_box</span>
                            <span className="text-base font-bold hidden lg:block">Create</span>
                        </a>
                        <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group justify-center lg:justify-start"
                            href="/notifications">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">notifications</span>
                            <span className="text-base font-medium hidden lg:block">Notifications</span>
                        </a>
                        <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group justify-center lg:justify-start"
                            href="/profile">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">person</span>
                            <span className="text-base font-medium hidden lg:block">Profile</span>
                        </a>
                    </nav>
                </div>
                <div className="p-4 lg:p-6">
                    <a className="flex items-center gap-4 px-3 lg:px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group justify-center lg:justify-start"
                        href="/settings">
                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">settings</span>
                        <span className="text-base font-medium hidden lg:block">Settings</span>
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-20 lg:ml-64 flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl bg-white/5 rounded-2xl shadow-xl border border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white/90">Create New Post</h2>
                        <button className="text-primary font-bold hover:text-primary/80 transition-colors">Drafts</button>
                    </div>

                    <div className="p-6 flex gap-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg")' }}>
                        </div>
                        <div className="flex-1">
                            <textarea className="w-full min-h-[150px] bg-transparent border-none resize-none text-lg placeholder:text-white/40 focus:ring-0 text-white/90" placeholder="What's on your mind, Sofia?"></textarea>

                            {/* Image Preview Area (Empty state) */}
                            <div className="mt-4 border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-white/40 hover:bg-white/5 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
                                <p className="font-medium">Add Photos/Videos</p>
                                <p className="text-xs">or drag and drop</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-between">
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full hover:bg-white/10 text-primary transition-colors" title="Photo/Video">
                                <span className="material-symbols-outlined">image</span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/10 text-blue-500 transition-colors" title="Tag People">
                                <span className="material-symbols-outlined">person_add</span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/10 text-yellow-500 transition-colors" title="Feeling/Activity">
                                <span className="material-symbols-outlined">mood</span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/10 text-red-500 transition-colors" title="Check in">
                                <span className="material-symbols-outlined">location_on</span>
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/10 text-white/60 transition-colors" title="More">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <button className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white/90 transition-colors">
                                    <span className="material-symbols-outlined text-lg">public</span>
                                    Public
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </button>
                            </div>
                            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Post</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

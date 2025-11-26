import React from 'react';

export default function Settings() {
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
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all duration-200 group"
                            href="/profile">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
                            <span className="text-base font-medium">My Profile</span>
                        </a>
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30"
                            href="/settings">
                            <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
                            <span className="text-base font-bold">Settings</span>
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
            <main className="ml-64 flex-1 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-white/90 mb-8">Settings</h1>

                    <div className="flex gap-8">
                        {/* Settings Sidebar */}
                        <div className="w-64 shrink-0">
                            <nav className="flex flex-col gap-1">
                                <button className="text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">Account</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Privacy & Security</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Notifications</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Display & Accessibility</button>
                                <button className="text-left px-4 py-3 rounded-lg text-white/60 font-medium hover:bg-white/5 hover:text-white/90 transition-colors">Help & Support</button>
                            </nav>
                        </div>

                        {/* Settings Content */}
                        <div className="flex-1 space-y-8">
                            {/* Profile Section */}
                            <section className="bg-white/5 rounded-2xl p-6 shadow-sm border border-white/5">
                                <h2 className="text-xl font-bold text-white/90 mb-6">Profile Information</h2>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="size-24 rounded-full bg-cover bg-center"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZkwNiRr_iqCmaOwqnbN7hPCzYh6Z4dlpe1XTS0TZkJlkFhYIjNNOxWnAbpSI709DieQ-UmcA2YNnmQvwXYZC2FqIk80g-AbQSk1eImNMINiLXke1AagDJfXoX3vjgcPLQybwWReohi7inqZHvFVZ37tthDe-NCJ8fpprRQNwhxSxJxPB2j6eWvsswKITTx23Jwm-lcbCymFr2tXZY65rdRd_nxeilXy7azJ29aLCExr9TT5MvAmV5CprjrQBCxyAk0qBOm_JfuAYg")' }}>
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-white/5 p-1.5 rounded-full border-2 border-[#1c0d11] hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white/90">Sofia Chen</h3>
                                        <p className="text-white/60">@sofiachen</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Display Name</label>
                                        <input type="text" defaultValue="Sofia Chen" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Username</label>
                                        <input type="text" defaultValue="sofiachen" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-white/90">Bio</label>
                                        <textarea className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium min-h-[100px] resize-none" defaultValue="Digital Artist & UI Designer 🎨 | Creating visual experiences that matter. 📍 San Francisco"></textarea>
                                        <p className="text-xs text-white/40 text-right">85/150 characters</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Email</label>
                                        <input type="email" defaultValue="sofia.chen@example.com" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/90">Website</label>
                                        <input type="url" defaultValue="https://sofiachen.design" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium" />
                                    </div>
                                </div>
                            </section>

                            {/* Preferences Section */}
                            <section className="bg-white/5 rounded-2xl p-6 shadow-sm border border-white/5">
                                <h2 className="text-xl font-bold text-white/90 mb-6">Preferences</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Private Account</h3>
                                            <p className="text-sm text-white/60">Only people you approve can see your photos and videos.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Activity Status</h3>
                                            <p className="text-sm text-white/60">Allow accounts you follow and anyone you message to see when you were last active.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white/90">Email Notifications</h3>
                                            <p className="text-sm text-white/60">Receive emails about your account activity.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </section>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-4">
                                <button className="px-6 py-2.5 rounded-lg font-bold text-white/60 hover:bg-white/5 transition-colors">Cancel</button>
                                <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

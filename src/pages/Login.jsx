import React from 'react';

export default function Login() {
    return (
        <div className="font-display bg-[#050816] text-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-[#1c0d11] rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row min-h-[600px] border border-white/10">
                {/* Left Side - Image/Brand */}
                <div className="w-full md:w-1/2 bg-primary relative p-12 flex flex-col justify-between text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-purple-600/80 mix-blend-multiply"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-5xl">hub</span>
                            <h1 className="text-3xl font-bold tracking-tight">ConnectSphere</h1>
                        </div>
                        <p className="text-lg text-white/90 font-medium max-w-md">Join the community of creators and thinkers shaping the future of digital connection.</p>
                    </div>

                    <div className="relative z-10">
                        <div className="flex gap-2 mb-4">
                            <div className="w-12 h-1 bg-white rounded-full"></div>
                            <div className="w-2 h-1 bg-white/40 rounded-full"></div>
                            <div className="w-2 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        <p className="text-sm text-white/80">"ConnectSphere has completely transformed how I collaborate with my team. It's intuitive, beautiful, and powerful."</p>
                        <p className="font-bold mt-2">Sarah Jenkins, Product Designer</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                    <div className="max-w-sm mx-auto w-full">
                        <h2 className="text-3xl font-bold text-white/90 mb-2">Welcome Back</h2>
                        <p className="text-white/60 mb-8">Please enter your details to sign in.</p>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/90">Email Address</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">mail</span>
                                    <input type="email" placeholder="Enter your email" className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium placeholder:text-white/40" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/90">Password</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">lock</span>
                                    <input type="password" placeholder="••••••••" className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/5 border-none focus:ring-2 focus:ring-primary/50 text-white/90 font-medium placeholder:text-white/40" />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 transition-colors">
                                        <span className="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/50" />
                                    <span className="text-sm font-medium text-white/60">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot password?</a>
                            </div>

                            <button type="button" className="w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98]">Sign In</button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-[#1c0d11] text-white/40 font-medium">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-white/90">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-white/90">
                                <img src="https://www.svgrepo.com/show/475647/apple-color.svg" className="w-5 h-5 invert" alt="Apple" />
                                Apple
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-white/60">
                            Don't have an account? <a href="#" className="font-bold text-primary hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import logo from '../assets/logo_sombre.png';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login } = useData();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login({ email, password });
            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-display bg-[#050816] text-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
            {/* Main Card Container */}
            <div className="w-full max-w-6xl bg-[#151a30] rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-white/5 relative">

                {/* Left Side - Premium Branding & Visuals */}
                <div className="w-full md:w-[45%] relative p-12 flex flex-col justify-between text-white overflow-hidden">
                    {/* Rich Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 opacity-90"></div>

                    {/* Texture/Noise Overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                    {/* Animated Light Spots */}
                    <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-orange-400 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

                    {/* Content Layer */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-lg">
                                    <img src={logo} alt="OnlyDBFan Logo" className="h-10 w-auto" />
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">OnlyDBFan</h1>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
                                Connectez, Créez, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-pink-200">Inspirez.</span>
                            </h2>
                            <p className="text-lg text-white/90 font-medium max-w-md leading-relaxed drop-shadow-md">
                                Rejoignez la communauté de référence pour les créateurs. Partagez votre passion, développez votre audience et monétisez votre contenu avec style.
                            </p>
                        </div>

                        {/* Testimonial Card */}
                        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="material-symbols-outlined text-yellow-400 text-xl fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <p className="text-lg text-white/95 italic mb-6 leading-relaxed">
                                "OnlyDBFan n'est pas qu'une plateforme ; c'est une révolution. Le design est magnifique, et la communauté est incroyablement solidaire. C'est là que vivent mes meilleures créations."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-[2px]">
                                    <div className="size-full rounded-full bg-gray-900 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="size-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Sarah Jenkins</p>
                                    <p className="text-sm text-white/70">Product Designer & Creator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-[55%] p-8 md:p-16 flex flex-col justify-center bg-[#151a30] relative">
                    <div className="max-w-md mx-auto w-full relative z-10">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-white mb-3">Welcome Back</h2>
                            <p className="text-gray-400 text-lg">Please enter your details to sign in.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 ml-1">Email Address</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">mail</span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0a0e17] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white font-medium placeholder:text-gray-600 transition-all outline-none shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 ml-1">Password</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-4 rounded-xl bg-[#0a0e17] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-white font-medium placeholder:text-gray-600 transition-all outline-none shadow-inner"
                                    />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">
                                        <span className="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-5 h-5 border-2 border-gray-600 rounded bg-[#0a0e17] peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                                        <span className="material-symbols-outlined absolute text-white text-sm opacity-0 peer-checked:opacity-100 left-[2px] top-[2px] pointer-events-none">check</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                                </label>
                                <button type="button" onClick={() => alert("Fonctionnalité 'Mot de passe oublié' à venir !")} className="text-sm font-bold text-primary hover:text-pink-400 transition-colors bg-transparent border-none">Forgot password?</button>
                            </div>

                            <button type="submit" disabled={isLoading} className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-none mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>

                        <div className="relative my-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-[#151a30] text-gray-500 font-medium">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => alert("Connexion Google simulée")} className="flex items-center justify-center gap-3 py-3.5 rounded-xl border border-white/10 bg-[#0a0e17] hover:bg-white/5 hover:border-white/20 transition-all font-bold text-gray-300 hover:text-white group">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" alt="Google" />
                                Google
                            </button>
                            <button onClick={() => alert("Connexion Apple simulée")} className="flex items-center justify-center gap-3 py-3.5 rounded-xl border border-white/10 bg-[#0a0e17] hover:bg-white/5 hover:border-white/20 transition-all font-bold text-gray-300 hover:text-white group">
                                <img src="https://www.svgrepo.com/show/475647/apple-color.svg" className="w-6 h-6 invert group-hover:scale-110 transition-transform" alt="Apple" />
                                Apple
                            </button>
                        </div>

                        <p className="mt-10 text-center text-gray-400">
                            Don't have an account? <a href="#" className="font-bold text-primary hover:text-pink-400 transition-colors ml-1">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';

export default function Messages() {
    const { conversations, currentUser, sendMessage, mockApi } = useData(); // mockApi access just in case for specialized calls or relying on sendMessage
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const messagesEndRef = useRef(null);

    // Filter conversations
    const filteredConversations = conversations.filter(c =>
        c.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeConversation = conversations.find(c => c.id === selectedConversationId) || conversations[0];

    useEffect(() => {
        if (conversations.length > 0 && !selectedConversationId) {
            setSelectedConversationId(conversations[0]?.id);
        }
    }, [conversations, selectedConversationId]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeConversation, activeConversation?.messages]); // Scroll when conversation changes or msgs update

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageText.trim()) return;

        sendMessage(activeConversation.id, messageText);
        setMessageText('');
    };

    const handleNewConversation = () => {
        // Mock action
        alert("Fonctionnalité 'Nouvelle conversation' simulée : Cela ouvrirait une liste d'utilisateurs.");
    };

    if (!currentUser) return <div className="p-10 text-center">Veuillez vous connecter pour voir vos messages.</div>;

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-black overflow-hidden font-display">
            {/* Sidebar List */}
            <div className="w-full md:w-1/3 border-r border-gray-200 dark:border-white/10 flex flex-col bg-white dark:bg-black">
                <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
                    <h2 className="font-bold text-xl text-gray-900 dark:text-white">Messages</h2>
                    <button
                        onClick={handleNewConversation}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-gray-900 dark:text-white">edit_square</span>
                    </button>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full py-2 pl-9 pr-4 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-1 focus:ring-primary-home/50"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {activeConversation?.messages?.map((msg) => (
                        <div key={msg.id} className={`flex flex - col gap - 1 ${msg.sender === 'me' ? 'items-end' : 'items-start'} `}>
                            <div className={`p - 3 rounded - 2xl shadow - md max - w - [70 %] ${msg.sender === 'me'
                                ? 'bg-primary text-white rounded-br-none'
                                : 'bg-white dark:bg-[#151a30] text-gray-900 dark:text-white/90 rounded-bl-none border border-gray-200 dark:border-white/5 shadow-sm'
                                } `}>
                                <p>{msg.text}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500 dark:text-white/40">{msg.time}</span>
                                {msg.sender === 'me' && <span className="material-symbols-outlined text-xs text-primary">done_all</span>}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-[#050816] border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-end gap-3 bg-gray-100 dark:bg-white/5 rounded-2xl p-2">
                        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <textarea
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[44px] py-2.5 focus:ring-0 text-gray-900 dark:text-white/90 placeholder:text-gray-500 dark:placeholder:text-white/40"
                            placeholder="Écrivez un message..." rows="1"></textarea>
                        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">mood</span>
                        </button>
                        <button
                            onClick={handleSendMessage}
                            disabled={!messageInput.trim()}
                            className="p-2 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* User Info Panel (Right Sidebar) */}
            <div className="w-72 border-l border-gray-200 dark:border-white/10 bg-white dark:bg-[#050816] hidden xl:flex flex-col p-6 overflow-y-auto">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4"
                        style={{ backgroundImage: `url("${activeConversation.user.avatar}")` }}>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white/90">{activeConversation.user.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-white/60">{activeConversation.user.handle || "@utilisateur"}</p>
                </div>

                <div className="flex justify-around mb-8">
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-full mb-1 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">person</span>
                        </button>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Profil</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-full mb-1 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">notifications_off</span>
                        </button>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Muet</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-full mb-1 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary">search</span>
                        </button>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Rechercher</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between cursor-pointer group">
                        <h3 className="font-bold text-sm text-gray-700 dark:text-white/60 group-hover:text-primary transition-colors">Médias, fichiers et liens</h3>
                        <span className="material-symbols-outlined text-gray-400 dark:text-white/40 group-hover:text-primary transition-colors">chevron_right</span>
                    </div>
                    {/* Placeholder media for demo */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="size-16 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-xs text-gray-400">Img</div>
                        <div className="size-16 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-xs text-gray-400">Img</div>
                    </div>

                    <div className="flex items-center justify-between cursor-pointer group mt-2">
                        <h3 className="font-bold text-sm text-gray-700 dark:text-white/60 group-hover:text-primary transition-colors">Confidentialité et support</h3>
                        <span className="material-symbols-outlined text-gray-400 dark:text-white/40 group-hover:text-primary transition-colors">chevron_right</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

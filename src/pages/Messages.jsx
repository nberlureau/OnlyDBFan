import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function Messages() {
    const { conversations, sendMessage, currentUser } = useData();
    const [selectedConversationId, setSelectedConversationId] = useState(conversations[0]?.id);
    const [messageInput, setMessageInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const activeConversation = conversations.find(c => c.id === selectedConversationId) || conversations[0];

    // Filter conversations
    const filteredConversations = conversations.filter(c =>
        c.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSendMessage = () => {
        if (!messageInput.trim()) return;
        sendMessage(activeConversation.id, messageInput);
        setMessageInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="font-display bg-white dark:bg-transparent text-gray-900 dark:text-gray-100 h-screen w-full flex overflow-hidden">
            {/* Conversation List (Sidebar gauche) */}
            <div className="w-80 border-r border-gray-200 dark:border-white/10 flex flex-col bg-white dark:bg-[#050816]">
                <div className="p-6 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Messages</h2>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-primary">
                            <span className="material-symbols-outlined">edit_square</span>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/40">search</span>
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 dark:bg-white/5 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 dark:placeholder:text-white/40 text-gray-900 dark:text-white/90"
                            placeholder="Rechercher des messages" type="text" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-2 flex flex-col gap-1">
                        {filteredConversations.map(conv => (
                            <div
                                key={conv.id}
                                onClick={() => setSelectedConversationId(conv.id)}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${selectedConversationId === conv.id
                                        ? 'bg-primary/10 dark:bg-primary/5'
                                        : 'hover:bg-gray-100 dark:hover:bg-white/5'
                                    }`}
                            >
                                <div className="relative">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                        style={{ backgroundImage: `url("${conv.user.avatar}")` }}>
                                    </div>
                                    <span className={`absolute bottom-0 right-0 size-3 border-2 border-white dark:border-[#1c0d11] rounded-full ${conv.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold truncate">{conv.user.name}</h3>
                                        <span className={`text-xs font-medium ${conv.unread > 0 ? 'text-primary' : 'text-gray-500 dark:text-white/40'}`}>{conv.time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-900 dark:text-white/90 font-medium' : 'text-gray-600 dark:text-white/60'}`}>
                                        {conv.lastMessage}
                                    </p>
                                </div>
                                {conv.unread > 0 && <div className="size-2 bg-primary rounded-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Area (Zone centrale) */}
            <div className="flex-1 flex flex-col bg-gray-50 dark:bg-transparent">
                {/* Chat Header */}
                <header className="h-20 border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-6 bg-white dark:bg-[#050816]">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{ backgroundImage: `url("${activeConversation.user.avatar}")` }}>
                            </div>
                            <span className={`absolute bottom-0 right-0 size-2.5 border-2 border-white dark:border-[#1c0d11] rounded-full ${activeConversation.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{activeConversation.user.name}</h3>
                            <p className={`text-xs font-medium ${activeConversation.user.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
                                {activeConversation.user.status === 'online' ? 'En ligne' : 'Hors ligne'}
                            </p>
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

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gray-50 dark:bg-transparent">
                    <div className="flex justify-center mb-4">
                        <span className="text-xs text-gray-500 dark:text-white/40 bg-gray-200 dark:bg-white/5 px-3 py-1 rounded-full">Aujourd'hui</span>
                    </div>

                    {activeConversation.messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 max-w-[70%] ${msg.sender === 'me' ? 'ml-auto flex-row-reverse' : ''}`}>
                            {msg.sender !== 'me' && (
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mt-auto shrink-0"
                                    style={{ backgroundImage: `url("${activeConversation.user.avatar}")` }}>
                                </div>
                            )}

                            <div className={`flex flex-col gap-1 ${msg.sender === 'me' ? 'items-end' : ''}`}>
                                <div className={`p-3 rounded-2xl shadow-md ${msg.sender === 'me'
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-white dark:bg-[#151a30] text-gray-900 dark:text-white/90 rounded-bl-none border border-gray-200 dark:border-white/5 shadow-sm'
                                    }`}>
                                    <p>{msg.text}</p>
                                </div>
                                <div className={`flex items-center gap-1 ${msg.sender === 'me' ? 'mr-2' : 'ml-2'}`}>
                                    <span className="text-xs text-gray-500 dark:text-white/40">{msg.time}</span>
                                    {msg.sender === 'me' && <span className="material-symbols-outlined text-xs text-primary">done_all</span>}
                                </div>
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
        </div>
    );
}

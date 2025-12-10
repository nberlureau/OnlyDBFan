import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';

export default function Messages() {
    const { conversations, currentUser, sendMessage } = useData();
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
    }, [activeConversation, activeConversation?.messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageText.trim() || !activeConversation) return;

        sendMessage(activeConversation.id, messageText);
        setMessageText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    const handleNewConversation = () => {
        alert("Fonctionnalité 'Nouvelle conversation' simulée : Cela ouvrirait une liste d'utilisateurs.");
    };

    if (!currentUser) return <div className="p-10 text-center">Veuillez vous connecter pour voir vos messages.</div>;
    if (!activeConversation) return <div className="p-10 text-center">Aucune conversation disponible.</div>;

    return (
        <div className="font-display bg-white dark:bg-transparent text-gray-900 dark:text-gray-100 h-screen w-full flex overflow-hidden">
            {/* Conversation List (Sidebar gauche) */}
            <div className="w-80 border-r border-gray-200 dark:border-white/10 flex flex-col bg-white dark:bg-[#050816]">
                <div className="p-6 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Messages</h2>
                        <button onClick={handleNewConversation} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-primary">
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
                    <div className="p-2">
                        {filteredConversations.map((conv) => (
                            <div
                                key={conv.id}
                                onClick={() => setSelectedConversationId(conv.id)}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${conv.id === selectedConversationId
                                        ? 'bg-primary/10 dark:bg-primary/5'
                                        : 'hover:bg-gray-100 dark:hover:bg-white/5'
                                    }`}>
                                <div className="relative">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                        style={{ backgroundImage: `url("${conv.user.avatar}")` }}>
                                    </div>
                                    <span className={`absolute bottom-0 right-0 size-3 ${conv.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} border-2 border-white dark:border-[#1c0d11] rounded-full`}></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold truncate">{conv.user.name}</h3>
                                        <span className={`text-xs font-medium ${conv.id === selectedConversationId ? 'text-primary' : 'text-gray-500 dark:text-white/40'}`}>{conv.time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-900 dark:text-white/90 font-medium' : 'text-gray-600 dark:text-white/60'}`}>{conv.lastMessage}</p>
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
                            <span className={`absolute bottom-0 right-0 size-2.5 ${activeConversation.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} border-2 border-white dark:border-[#1c0d11] rounded-full`}></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{activeConversation.user.name}</h3>
                            <p className={`text-xs font-medium ${activeConversation.user.status === 'online' ? 'text-green-500' : 'text-gray-400'}`}>
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

                    {activeConversation.messages?.map((msg) => (
                        msg.sender === 'me' ? (
                            // Message Sent (Envoyé)
                            <div key={msg.id} className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
                                <div className="flex flex-col gap-1 items-end">
                                    <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none shadow-md">
                                        <p>{msg.text}</p>
                                    </div>
                                    <div className="flex items-center gap-1 mr-2">
                                        <span className="text-xs text-gray-500 dark:text-white/40">{msg.time}</span>
                                        <span className="material-symbols-outlined text-xs text-primary">done_all</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Message Received (Reçu)
                            <div key={msg.id} className="flex gap-3 max-w-[70%]">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 mt-auto shrink-0"
                                    style={{ backgroundImage: `url("${activeConversation.user.avatar}")` }}>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="bg-white dark:bg-[#151a30] p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-200 dark:border-white/5">
                                        <p className="text-gray-900 dark:text-white/90">{msg.text}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-white/40 ml-2">{msg.time}</span>
                                </div>
                            </div>
                        )
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-[#050816] border-t border-gray-200 dark:border-white/10">
                    <form onSubmit={handleSendMessage} className="flex items-end gap-3 bg-gray-100 dark:bg-white/5 rounded-2xl p-2">
                        <button type="button" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <textarea
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[44px] py-2.5 focus:ring-0 text-gray-900 dark:text-white/90 placeholder:text-gray-500 dark:placeholder:text-white/40"
                            placeholder="Écrivez un message..." rows="1"></textarea>
                        <button type="button" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">mood</span>
                        </button>
                        <button type="submit" disabled={!messageText.trim()} className="p-2 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* User Info Panel (Right Sidebar) */}
            <div className="w-72 border-l border-gray-200 dark:border-white/10 bg-white dark:bg-[#050816] hidden xl:flex flex-col p-6 overflow-y-auto">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4"
                        style={{ backgroundImage: `url("${activeConversation.user.avatar}")` }}>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white/90">{activeConversation.user.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-white/60">@{activeConversation.user.name.toLowerCase().replace(' ', '_')}</p>
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
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5G1BedjcAY76ZKGAgKITkpDpRJzH3di4iwP7ENEGWOIbLWpsFSX6To0K49l7UsJTYiZpeR4di0YrPeMegZ7TDhfJXkj546ftssOTx0FhpKl3PO1cuKA22_jk74jfsyGK0ybUo6WUw-34TkS2s9-1yOyArwWE3Pi5d6i_Q9o2Svp2Nrz1ZdpXX6oGP0uziQ_EKXl9Mm7XInN6xQ9j1OwGfH7rFbnbpHNexQpXF69WOSxuW63K391tr23QN1agTAxshy7eMkBVhhn_r" alt="Media" />
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg" alt="Media" />
                        <img className="size-16 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBNz_5a9wdouyYRO4nasBPOZgZ2E45OhKnVguus3y0egEVwFYuh19p8nk4Wf2KGV4jpCAKQVqjvZbC2qEWGZ6vEAvPH4lE31M-podPFlkYbTy2WgLpsg8ySRnApvzYRMeLtIzhzFQ-r-7eVeAR1-TjfZM3kRW06aLst02CRiNoWGoFCLikLCL7_qZs0kl1TRd6OODub7Wvvaq2GbpZth_U62ZmiVj5yusYBe_HGAv2Mgnmo2c8lW3fxOXraWe3mbqkKXMoHdXbMaP" alt="Media" />
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

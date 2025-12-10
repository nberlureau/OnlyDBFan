import React from 'react';
import { useData } from '../context/DataContext';

export default function Notifications() {
    const { notifications, markNotificationRead, toggleFollow, users } = useData();
    const [filter, setFilter] = React.useState('all');

    const filteredNotifications = notifications.filter(n => {
        if (filter === 'all') return true;
        if (filter === 'mentions') return n.type === 'mention' || n.type === 'comment';
        if (filter === 'subscriptions') return n.type === 'follow';
        return true;
    });

    const groupedNotifications = filteredNotifications.reduce((acc, note) => {
        if (!acc[note.date]) acc[note.date] = [];
        acc[note.date].push(note);
        return acc;
    }, {});

    const handleMarkAllRead = () => {
        notifications.forEach(n => {
            if (!n.read) markNotificationRead(n.id);
        });
    };

    const handleAction = (note) => {
        if (note.type === 'follow') {
            // Find user to get ID (mock logic, ideally notification has userId)
            const user = users.find(u => u.name === note.user.name);
            if (user) {
                toggleFollow(user.id);
            }
        }
    };

    return (
        // Fond transparent et texte adaptatif
        <div className="font-display bg-transparent text-gray-900 dark:text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 max-w-3xl mx-auto p-6">
                <div className="flex items-center justify-between mb-8">
                    {/* Titre adaptatif */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white/90">Notifications</h2>
                    <button
                        onClick={handleMarkAllRead}
                        className="text-primary-notifications font-medium hover:underline">Tout marquer comme lu</button>
                </div>

                {/* Onglets avec bordure adaptative */}
                <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-white/10">
                    <button
                        onClick={() => setFilter('all')}
                        className={`pb-3 px-2 border-b-2 font-bold transition-colors ${filter === 'all'
                            ? 'border-primary-notifications text-primary-notifications'
                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                    >
                        Tout
                    </button>
                    <button
                        onClick={() => setFilter('mentions')}
                        className={`pb-3 px-2 border-b-2 font-medium transition-colors ${filter === 'mentions'
                            ? 'border-primary-notifications text-primary-notifications font-bold'
                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                    >
                        Mentions
                    </button>
                    <button
                        onClick={() => setFilter('subscriptions')}
                        className={`pb-3 px-2 border-b-2 font-medium transition-colors ${filter === 'subscriptions'
                            ? 'border-primary-notifications text-primary-notifications font-bold'
                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                    >
                        Abonnements
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {Object.entries(groupedNotifications).map(([date, notes]) => (
                        <React.Fragment key={date}>
                            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-2 mb-2">{date}</h3>
                            {notes.map(note => (
                                <div
                                    key={note.id}
                                    onClick={() => !note.read && markNotificationRead(note.id)}
                                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors cursor-pointer relative group ${note.read
                                        ? 'bg-transparent border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5'
                                        : 'bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-[#333333] hover:border-primary-notifications/20 shadow-sm dark:shadow-none'
                                        }`}>
                                    <div className="relative shrink-0">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                            style={{ backgroundImage: `url("${note.user.avatar}")` }}>
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 text-white rounded-full p-0.5 border-2 border-white dark:border-[#1E1E1E] ${note.type === 'comment' ? 'bg-blue-500' :
                                            note.type === 'like' ? 'bg-red-500' :
                                                note.type === 'follow' ? 'bg-green-500' :
                                                    'bg-purple-500'
                                            }`}>
                                            <span className="material-symbols-outlined text-sm block">
                                                {note.type === 'comment' ? 'chat_bubble' :
                                                    note.type === 'like' ? 'favorite' :
                                                        note.type === 'follow' ? 'person_add' :
                                                            'alternate_email'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-gray-900 dark:text-gray-100 leading-snug">
                                            <span className="font-bold">{note.user.name}</span>
                                            {" "}
                                            {note.type === 'comment' && `a commenté votre publication : "Ça a l'air incroyable !"`}
                                            {note.type === 'like' && `a aimé votre photo.`}
                                            {note.type === 'follow' && `a commencé à vous suivre.`}
                                            {note.type === 'mention' && `vous a mentionné.`}
                                        </div>
                                        <span className={`text-xs font-medium mt-1 block ${note.read ? 'text-gray-500 dark:text-gray-400' : 'text-primary-notifications'}`}>
                                            {note.time}
                                        </span>
                                    </div>
                                    {!note.read && <div className="size-3 bg-primary-notifications rounded-full shrink-0 mt-2"></div>}
                                    {note.image && <img className="size-12 rounded-lg object-cover shrink-0 ml-2" src={note.image} />}
                                    {note.type === 'follow' && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAction(note);
                                            }}
                                            className="px-4 py-1.5 bg-primary-notifications text-white text-sm font-bold rounded-lg hover:bg-primary-notifications/90 transition-colors">
                                            Suivre en retour
                                        </button>
                                    )}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                    {Object.keys(groupedNotifications).length === 0 && (
                        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                            Aucune notification à afficher.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

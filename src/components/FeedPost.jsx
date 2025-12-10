import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function FeedPost({ post }) {
    const { toggleLike, toggleBookmark, addComment } = useData();
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [isReposted, setIsReposted] = useState(false);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        addComment(post.id, commentText);
        setCommentText('');
    };

    const handleRepost = () => {
        setIsReposted(!isReposted);
        // In a real app, this would call an API. Here we just toggle local visual state.
        // We could also add a toast or similar feedback.
    };

    return (
        <div className="bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-200 dark:border-white/10 transition-colors">
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <img className="size-10 rounded-full object-cover" src={post.author.avatar} alt={`Avatar of ${post.author.name}`} />
                    <div>
                        <p className="font-bold text-[#1d0c11] dark:text-white">{post.author.name}</p>
                        <p className="text-sm text-[#a14560] dark:text-gray-400">{post.time}</p>
                    </div>
                </div>
                <p className="mt-4 text-[#1d0c11] dark:text-gray-300 whitespace-pre-line">{post.content}</p>
            </div>

            {post.image && (
                <img className="w-full h-auto object-cover max-h-[600px]" src={post.image} alt="Post content" />
            )}

            {/* Reaction Bar */}
            <div className="flex justify-around items-center p-2 border-t border-[#eacdd6] dark:border-white/10">
                <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors">
                    <span
                        className={`material-symbols-outlined ${post.isLiked ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ff6190] to-[#ff9a8b]' : ''}`}
                        style={post.isLiked ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                        favorite
                    </span>
                    <span className="text-sm font-bold">{post.likes}</span>
                </button>
                <button
                    onClick={() => setShowComments(!showComments)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors ${showComments ? 'bg-primary-home/5 dark:bg-white/5' : ''}`}>
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span className="text-sm font-bold">{post.comments?.length || 0}</span>
                </button>
                <button
                    onClick={handleRepost}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors ${isReposted ? 'text-green-500 dark:text-green-400' : ''}`}>
                    <span className="material-symbols-outlined" style={isReposted ? { fontVariationSettings: "'wght' 700" } : {}}>repeat</span>
                    <span className="text-sm font-bold">{post.shares + (isReposted ? 1 : 0)}</span>
                </button>
                <button
                    onClick={() => toggleBookmark(post.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors">
                    <span
                        className={`material-symbols-outlined ${post.isBookmarked ? 'text-yellow-500' : ''}`}
                        style={post.isBookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                        bookmark
                    </span>
                </button>
            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="p-4 border-t border-[#eacdd6] dark:border-white/10 text-sm bg-gray-50 dark:bg-black/20">
                    {/* List of comments */}
                    <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                        {post.comments?.length > 0 ? (
                            post.comments.map((comment) => (
                                <div key={comment.id} className="flex gap-2">
                                    <span className="font-bold text-[#1d0c11] dark:text-white shrink-0">{comment.user}</span>
                                    <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic text-center">Aucun commentaire pour le moment. Soyez le premier !</p>
                        )}
                    </div>

                    {/* Add comment input */}
                    <form onSubmit={handleCommentSubmit} className="flex gap-2">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Écrire un commentaire..."
                            className="flex-1 bg-white dark:bg-[#151a30] border border-gray-300 dark:border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary-home dark:text-white"
                        />
                        <button
                            type="submit"
                            disabled={!commentText.trim()}
                            className="p-2 rounded-full bg-primary-home text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

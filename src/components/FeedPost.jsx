import React from 'react';
import { useData } from '../context/DataContext';

export default function FeedPost({ post }) {
    const { toggleLike, toggleBookmark } = useData();

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
                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors">
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span className="text-sm font-bold">{post.comments}</span>
                </button>
                <button
                    className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary-home/10 dark:hover:bg-primary-home/20 text-[#a14560] dark:text-gray-400 transition-colors">
                    <span className="material-symbols-outlined">repeat</span>
                    <span className="text-sm font-bold">{post.shares}</span>
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

            {/* Comments Preview (Static for now) */}
            {post.comments > 0 && (
                <div className="p-4 border-t border-[#eacdd6] dark:border-white/10 text-sm">
                    <p><strong className="dark:text-white">liam_miller</strong> J'adore cette photo ! Tellement paisible.</p>
                </div>
            )}
        </div>
    );
}

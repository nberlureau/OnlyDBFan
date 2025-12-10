```javascript
import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockApi } from '../services/mockApi';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    // State initialization
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initial Data Fetch
    useEffect(() => {
        const loadInitialData = async () => {
            setIsLoading(true);
            try {
                // Determine if user is "logged in" by checking localStorage or just default null
                // For this demo, we can assume no user initially, or check a "token"
                // Let's load generic data first
                const [usersData, postsData, notifsData] = await Promise.all([
                    mockApi.users.list(),
                    mockApi.posts.list(),
                    mockApi.notifications.list()
                ]);
                
                setUsers(usersData);
                setPosts(postsData);
                setNotifications(notifsData);
            } catch (error) {
                console.error("Failed to load data", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadInitialData();
    }, []);

    // Load conversations only when user is logged in
    useEffect(() => {
        if (currentUser) {
            mockApi.messages.list().then(setConversations);
        } else {
            setConversations([]);
        }
    }, [currentUser]);

    // --- Actions Wrappers ---

    const login = async (credentials) => {
        const user = await mockApi.auth.login(credentials);
        setCurrentUser(user);
        return user;
    };

    const signup = async (userData) => {
        const user = await mockApi.auth.signup(userData);
        setCurrentUser(user);
        return user;
    };

    const logout = async () => {
        setCurrentUser(null);
    };

    const addPost = async (content, image) => {
        const newPost = await mockApi.posts.create(content, image);
        setPosts(prev => [newPost, ...prev]);
    };

    const toggleLike = async (postId) => {
        await mockApi.posts.toggleLike(postId);
        setPosts(prev => prev.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1
                };
            }
            return post;
        }));
    };

    const addComment = async (postId, text) => {
        const newComment = await mockApi.posts.addComment(postId, text);
        setPosts(prev => prev.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...(post.comments || []), newComment]
                };
            }
            return post;
        }));
    };

    const toggleBookmark = (postId) => {
        // Optimistic update
        setPosts(prev => prev.map(post => 
            post.id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post
        ));
    };

    const toggleFollow = async (userId) => {
        await mockApi.users.toggleFollow(userId);
        // Update users list
        setUsers(prev => prev.map(u => 
            u.id === userId ? { ...u, isFollowing: !u.isFollowing } : u
        ));
        // Also update posts author if needed, or handle visually in components
        // For simplified demo, we just update the user entity
    };

    const sendMessage = async (conversationId, text) => {
        // Optimistic UI update or wait for mock response
        const newMessage = await mockApi.messages.send(conversationId, text);
        setConversations(prev => prev.map(c => {
            if (c.id === conversationId) {
                return {
                    ...c,
                    messages: [...c.messages, newMessage],
                    lastMessage: text,
                    time: "Now"
                };
            }
            return c;
        }));
        return newMessage;
    };

    const markNotificationRead = async (notificationId) => {
        await mockApi.notifications.markRead(notificationId);
        setNotifications(prev => prev.map(n => 
            n.id === notificationId ? { ...n, read: true } : n
        ));
    };

    const markAllNotificationsRead = async () => {
        // mock API call for batch update could be added
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const value = {
        currentUser,
        users,
        posts,
        conversations,
        notifications,
        login,
        logout,
        addPost,
        toggleLike,
        toggleBookmark,
        toggleFollow,
        sendMessage,
        markNotificationRead
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

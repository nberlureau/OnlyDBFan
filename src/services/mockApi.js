import { mockUsers, mockCurrentUser, mockPosts, mockConversations, mockNotifications } from './mockData';

const LATENCY = 500;

// Helper to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
    auth: {
        login: async (credentials) => {
            await delay(LATENCY);
            if (credentials.email === mockCurrentUser.email && credentials.password === mockCurrentUser.password) {
                return { ...mockCurrentUser };
            }
            throw new Error("Identifiants incorrects (Essayez: demo@example.com / password)");
        },
        signup: async (userData) => {
            await delay(LATENCY);
            return { ...mockCurrentUser, ...userData, id: 'u_new_' + Date.now() };
        },
        updateProfile: async (data) => {
            await delay(LATENCY);
            return { ...mockCurrentUser, ...data };
        }
    },
    posts: {
        list: async () => {
            await delay(LATENCY);
            return [...mockPosts];
        },
        create: async (content, image) => {
            await delay(LATENCY);
            const newPost = {
                id: Date.now(),
                author: {
                    name: mockCurrentUser.name,
                    handle: mockCurrentUser.handle,
                    avatar: mockCurrentUser.avatar
                },
                time: "À l'instant",
                content: content,
                image: image || null,
                likes: 0,
                comments: [],
                shares: 0,
                isLiked: false,
                isBookmarked: false
            };
            return newPost;
        },
        toggleLike: async (postId) => {
            await delay(200); // Faster feedback for toggles
            // Logic handled by optimistic updates in Context, but here we'd return the new state if we really persisted
            return true;
        },
        addComment: async (postId, text) => {
            await delay(LATENCY);
            return {
                id: Date.now(),
                user: mockCurrentUser.name,
                text: text
            };
        }
    },
    users: {
        list: async () => {
            await delay(LATENCY);
            return [...mockUsers];
        },
        toggleFollow: async (userId) => {
            await delay(200);
            return true;
        }
    },
    messages: {
        list: async () => {
            await delay(LATENCY);
            return [...mockConversations];
        },
        send: async (conversationId, text) => {
            await delay(200);
            return {
                id: Date.now(),
                text: text,
                sender: 'me',
                time: 'Now'
            };
        },
        createConversation: async (userId) => {
            await delay(LATENCY);
            // Return a new mock conversation
            return {
                id: 'c_' + Date.now(),
                user: mockUsers.find(u => u.id === userId) || mockUsers[0],
                lastMessage: "",
                time: "Now",
                unread: 0,
                messages: []
            };
        }
    },
    notifications: {
        list: async () => {
            await delay(LATENCY);
            return [...mockNotifications];
        },
        markRead: async (id) => {
            await delay(200);
            return true;
        }
    }
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050816] text-gray-900 dark:text-gray-100 flex">
            <Sidebar />
            <main className="flex-1 ml-64">
                <Outlet />
            </main>
        </div>
    );
}

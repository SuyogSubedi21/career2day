
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar.jsx';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col w-full max-w-none pt-16">
        <Outlet />
      </main>
    </div>
  );
}

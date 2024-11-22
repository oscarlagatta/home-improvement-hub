import React, { FC } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { SidebarProvider } from './context/sidebar-context';

export const Layout: FC = () => {
  return (
    <div className="w-screen  h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <main className="flex-1 p-4 bg-gray-50">{/*<Outlet />*/}</main>
      </div>
      <Footer />
    </div>
  );
};

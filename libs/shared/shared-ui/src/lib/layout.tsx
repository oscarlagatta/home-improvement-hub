import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { SidebarProvider } from './context/sidebar-context';

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div >
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

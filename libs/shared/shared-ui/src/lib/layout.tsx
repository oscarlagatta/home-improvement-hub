import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const Layout: FC = () => {
  return (
    <div className="w-screen  h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

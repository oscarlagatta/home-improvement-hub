import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const LayoutOrders: FC = () => {
  return (
    <div className="flex flex-1">
      <main className="flex-1  bg-gray-50">Orders</main>
    </div>
  );
};

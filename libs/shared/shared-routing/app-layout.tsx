import { Header } from '@home-improvement-hub/shadcn';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

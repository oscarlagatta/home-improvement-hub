import { Outlet } from 'react-router-dom';
import { Button, Tabs } from '@home-improvement-hub/shadcn';
import DashboardNav from './dashboard-nav';

export function DashboardUi() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download</Button>
          </div>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <DashboardNav />
        <main>
          <Outlet />
        </main>
      </Tabs>
    </>
  );
}

export default DashboardUi;

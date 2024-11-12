import { DashboardPage } from './dashboard/dashboard';
import Header from './components/header';

export function AppLayout() {
  return (
    <>
      <Header />
      <DashboardPage />
    </>
  );
}

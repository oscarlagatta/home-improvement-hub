import { Link } from 'react-router-dom';
import { TabsList, TabsTrigger } from '@home-improvement-hub/shadcn';

export default function DashboardNav() {
  return (
    <TabsList defaultValue="overview">
      <Link to="/dashboard/overview">
        <TabsTrigger value="overview">Overview</TabsTrigger>
      </Link>
      <Link to="/dashboard/analytics">
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </Link>
      <Link to="/dashboard/reports">
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </Link>
    </TabsList>
  );
}

import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardUi } from '@home-improvement-hub/dashboard-ui';
import { AppLayout } from '../../app-layout';
import { UserManagementUi } from '@home-improvement-hub/user-management-ui';
import { SubscriptionManagementUi } from '@home-improvement-hub/subscription-management-ui';
import { JobManagementUi } from '@home-improvement-hub/job-management-ui';
import { LeadManagementUi } from '@home-improvement-hub/lead-management-ui';
import { ReportManagementUi } from '@home-improvement-hub/report-management-ui';
import { NotificationManagementUi } from '@home-improvement-hub/notification-management-ui';
import { ResourceManagementUi } from '@home-improvement-hub/resource-management-ui';
import { FeatureOverview } from '@home-improvement-hub/feature-overview';
import { FeatureAnalytics } from '@home-improvement-hub/feature-analytics';
import { FeatureReports } from '@home-improvement-hub/feature-reports';
import {
  BackOfficeHome,
  Template,
} from '@home-improvement-hub/back-office-home';

const router = createBrowserRouter([
  {
    path: '/template',
    element: <Template />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <BackOfficeHome />,
      },
      {
        path: 'dashboard',
        element: <DashboardUi />,
        children: [
          {
            index: true,
            element: <FeatureOverview />,
          },
          {
            path: '/dashboard/overview',
            element: <FeatureOverview />,
          },
          {
            path: 'analytics',
            element: <FeatureAnalytics />,
          },
          {
            path: 'reports',
            element: <FeatureReports />,
          },
        ],
      },
      {
        path: 'user',
        element: <UserManagementUi />,
      },
      {
        path: 'subscription',
        element: <SubscriptionManagementUi />,
      },
      {
        path: 'job',
        element: <JobManagementUi />,
      },
      {
        path: 'lead',
        element: <LeadManagementUi />,
      },
      {
        path: 'report',
        element: <ReportManagementUi />,
      },
      {
        path: 'review',
        element: <ReportManagementUi />,
      },
      {
        path: 'notification',
        element: <NotificationManagementUi />,
      },
      {
        path: 'resource',
        element: <ResourceManagementUi />,
      },
    ],
  },
]);

export function AppRouting() {
  return <RouterProvider router={router} />;
}

export default AppRouting;

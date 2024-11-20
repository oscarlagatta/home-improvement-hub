import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Layout = lazy(() =>
  import('@home-improvement-hub/shared-ui').then((module) => ({
    default: module.Layout,
  }))
);

const DashboardUi = lazy(() =>
  import('@home-improvement-hub/dashboard-ui').then((module) => ({
    default: module.DashboardUi,
  }))
);
const FeatureOverview = lazy(() =>
  import('@home-improvement-hub/feature-overview').then((module) => ({
    default: module.FeatureOverview,
  }))
);

const FeatureAnalytics = lazy(() =>
  import('@home-improvement-hub/feature-analytics').then((module) => ({
    default: module.FeatureAnalytics,
  }))
);

const FeatureReports = lazy(() =>
  import('@home-improvement-hub/feature-reports').then((module) => ({
    default: module.FeatureReports,
  }))
);

const FeatureUserListTable = lazy(() =>
  import('@home-improvement-hub/feature-user-list-table').then((module) => ({
    default: module.FeatureUserListTable,
  }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardUi />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureOverview />
              </Suspense>
            ),
          },
          {
            path: '/dashboard/overview',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureOverview />
              </Suspense>
            ),
          },
          {
            path: '/dashboard/analytics',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureAnalytics />
              </Suspense>
            ),
          },
          {
            path: '/dashboard/reports',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureReports />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/user',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FeatureUserListTable />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

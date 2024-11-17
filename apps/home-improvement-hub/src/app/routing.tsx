import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Layout = lazy(() =>
  import('@home-improvement-hub/shared-ui').then((module) => ({
    default: module.Layout,
  }))
);

const FeatureAgents = lazy(() =>
  import('@home-improvement-hub/feature-agents').then((module) => ({
    default: module.FeatureAgents,
  }))
);

const FeatureBookings = lazy(() =>
  import('@home-improvement-hub/feature-bookings').then((module) => ({
    default: module.FeatureBookings,
  }))
);

const FeatureReviews = lazy(() =>
  import('@home-improvement-hub/feature-reviews').then((module) => ({
    default: module.FeatureReviews,
  }))
);

const FeatureUserListTable = lazy(() =>
  import('@home-improvement-hub/feature-user-list-table').then((module) => ({
    default: module.FeatureUserListTable,
  }))
);

const FeatureServices = lazy(() =>
  import('@home-improvement-hub/feature-services').then((module) => ({
    default: module.FeatureServices,
  }))
);

const LayoutDashboard = lazy(() =>
  import('@home-improvement-hub/shared-ui').then((module) => ({
    default: module.LayoutDashboard,
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
        path: 'dashboard',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutDashboard />
          </Suspense>
        ),
        children: [
          {
            path: '/feature-services',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureServices />
              </Suspense>
            ),
          },
          {
            path: '/feature-agents',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureAgents />
              </Suspense>
            ),
          },
          {
            path: '/feature-bookings',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureBookings />
              </Suspense>
            ),
          },
          {
            path: '/feature-reviews',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureReviews />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/feature-users',
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

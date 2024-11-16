import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Layout,
  LayoutDashboard,
  LayoutOrders,
} from '@home-improvement-hub/shared-ui';
import { FeatureServices } from '@home-improvement-hub/feature-services';
import React, { Suspense } from 'react';
import { FeatureAgents } from '@home-improvement-hub/feature-agents';
import { FeatureReviews } from '@home-improvement-hub/feature-reviews';
import { FeatureBookings } from '@home-improvement-hub/feature-bookings';
import FeatureUserListTable
  from '../../../../user-management/features/user-list/feature-user-list-table/src/lib/feature-user-list-table';
//import { Layout } from '../../../ui/src/lib/layout';

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <FeatureServices/>,
  //     },
  //     {
  //       path: "services",
  //       element:  <FeatureServices/>,
  //     },
  //     {
  //       path: "agents",
  //       element:  <FeatureAgents/>,
  //     },
  //     {
  //       path: "reviews",
  //       element:  <FeatureReviews/>,
  //     },
  //     {
  //       path: "bookings",
  //       element:  <FeatureBookings/>,
  //     },
  //   ],
  // },

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <LayoutDashboard />,
        children: [
          {
            path: 'services',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureServices />
              </Suspense>
            ),
          },
          {
            path: 'agents',
            element: <FeatureAgents />,
          },
          {
            path: 'bookings',
            element: <FeatureBookings />,
          },
          {
            path: 'reviews',
            element: <FeatureReviews />,
          },
        ],
      },
      {
        path: 'users',
        element: <FeatureUserListTable />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

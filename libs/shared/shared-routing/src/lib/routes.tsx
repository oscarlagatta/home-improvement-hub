import { RouteObject } from 'react-router-dom';
import { Layout } from '@home-improvement-hub/shared-ui';
import { Ui } from '@home-improvement-hub/ui';
import { FeatureUserListTable } from '@home-improvement-hub/feature-user-list-table';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'users',
        element: <Ui />,
        children: [{ index: true, element: <FeatureUserListTable /> }],
      },
    ],
  },
];

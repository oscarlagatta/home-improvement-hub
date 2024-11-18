import { render } from '@testing-library/react';

import NotificationManagementDataAccess from './notification-management-data-access';

describe('NotificationManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

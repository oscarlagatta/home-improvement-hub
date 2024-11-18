import { render } from '@testing-library/react';

import NotificationManagementUtility from './notification-management-utility';

describe('NotificationManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

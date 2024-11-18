import { render } from '@testing-library/react';

import NotificationManagementUi from './notification-management-ui';

describe('NotificationManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

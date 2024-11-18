import { render } from '@testing-library/react';

import SubscriptionManagementDataAccess from './subscription-management-data-access';

describe('SubscriptionManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubscriptionManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

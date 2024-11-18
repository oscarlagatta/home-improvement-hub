import { render } from '@testing-library/react';

import SubscriptionManagementUtility from './subscription-management-utility';

describe('SubscriptionManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubscriptionManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

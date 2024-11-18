import { render } from '@testing-library/react';

import SubscriptionManagementUi from './subscription-management-ui';

describe('SubscriptionManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubscriptionManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

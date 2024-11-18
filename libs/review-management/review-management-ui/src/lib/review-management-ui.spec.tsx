import { render } from '@testing-library/react';

import ReviewManagementUi from './review-management-ui';

describe('ReviewManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

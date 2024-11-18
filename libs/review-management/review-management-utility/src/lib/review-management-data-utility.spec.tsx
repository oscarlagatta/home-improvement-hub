import { render } from '@testing-library/react';

import ReviewManagementDataUtility from './review-management-data-utility';

describe('ReviewManagementDataUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewManagementDataUtility />);
    expect(baseElement).toBeTruthy();
  });
});

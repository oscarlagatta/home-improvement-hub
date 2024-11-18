import { render } from '@testing-library/react';

import ReviewManagementDataAccess from './review-management-data-access';

describe('ReviewManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

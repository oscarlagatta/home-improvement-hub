import { render } from '@testing-library/react';

import JobManagementUtility from './job-management-utility';

describe('JobManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

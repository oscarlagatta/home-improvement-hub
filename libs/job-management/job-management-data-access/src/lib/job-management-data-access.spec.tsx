import { render } from '@testing-library/react';

import JobManagementDataAccess from './job-management-data-access';

describe('JobManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

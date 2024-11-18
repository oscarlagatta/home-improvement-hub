import { render } from '@testing-library/react';

import JobManagementUi from './job-management-ui';

describe('JobManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReportManagementDataAccess from './report-management-data-access';

describe('ReportManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

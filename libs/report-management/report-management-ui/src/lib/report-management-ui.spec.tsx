import { render } from '@testing-library/react';

import ReportManagementUi from './report-management-ui';

describe('ReportManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

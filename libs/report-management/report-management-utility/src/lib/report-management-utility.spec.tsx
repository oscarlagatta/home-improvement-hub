import { render } from '@testing-library/react';

import ReportManagementUtility from './report-management-utility';

describe('ReportManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

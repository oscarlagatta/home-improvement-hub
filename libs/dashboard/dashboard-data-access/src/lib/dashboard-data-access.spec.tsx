import { render } from '@testing-library/react';

import DashboardDataAccess from './dashboard-data-access';

describe('DashboardDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

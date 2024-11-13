import { render } from '@testing-library/react';

import DashboardRouting from './dashboard-routing';

describe('DashboardRouting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardRouting />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import LeadManagementDataAccess from './lead-management-data-access';

describe('LeadManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeadManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

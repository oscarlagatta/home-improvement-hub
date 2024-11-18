import { render } from '@testing-library/react';

import LeadManagementUi from './lead-management-ui';

describe('LeadManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeadManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

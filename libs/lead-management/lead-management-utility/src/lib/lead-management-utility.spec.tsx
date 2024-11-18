import { render } from '@testing-library/react';

import LeadManagementUtility from './lead-management-utility';

describe('LeadManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeadManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ResourceManagementDataAccess from './resource-management-data-access';

describe('ResourceManagementDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceManagementDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});

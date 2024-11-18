import { render } from '@testing-library/react';

import ResourceManagementUi from './resource-management-ui';

describe('ResourceManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});

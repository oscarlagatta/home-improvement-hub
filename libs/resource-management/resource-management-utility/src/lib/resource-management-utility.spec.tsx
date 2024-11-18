import { render } from '@testing-library/react';

import ResourceManagementUtility from './resource-management-utility';

describe('ResourceManagementUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceManagementUtility />);
    expect(baseElement).toBeTruthy();
  });
});

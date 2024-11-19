import { render } from '@testing-library/react';

import Profile from './profile';
import * as React from 'react';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Profile />);
    expect(baseElement).toBeTruthy();
  });
});

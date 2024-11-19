import { render } from '@testing-library/react';

import FeatureRecentSales from './feature-recent-sales';

describe('FeatureRecentSales', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureRecentSales />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import FeatureAnalytics from './feature-analytics';

describe('FeatureAnalytics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureAnalytics />);
    expect(baseElement).toBeTruthy();
  });
});

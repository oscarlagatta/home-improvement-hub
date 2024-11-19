import { render } from '@testing-library/react';

import FeatureReports from './feature-reports';

describe('FeatureReports', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureReports />);
    expect(baseElement).toBeTruthy();
  });
});

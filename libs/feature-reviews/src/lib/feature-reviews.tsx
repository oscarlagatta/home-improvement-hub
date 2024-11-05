import { useCoreData } from '@home-improvement-hub/data';

export function FeatureReviews() {

  const { reviews } = useCoreData();
  return (
    <div>
      <h1>Welcome to FeatureReviews!</h1>
      <pre>{JSON.stringify(reviews, null, 2)}</pre>

    </div>
  );

}

export default FeatureReviews;

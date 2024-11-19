import { useReviews } from '@home-improvement-hub/data';

export function FeatureReviews() {
  const { reviews } = useReviews();
  return (
    <div>
      <h1>Welcome to FeatureReviews!</h1>
      <pre>{JSON.stringify(reviews, null, 2)}</pre>
    </div>
  );
}

export default FeatureReviews;

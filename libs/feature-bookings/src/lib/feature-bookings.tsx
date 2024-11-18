import { useJobs } from '@home-improvement-hub/data';

export function FeatureBookings() {
  const { jobs } = useJobs();
  return (
    <div>
      <h1>Welcome to FeatureBookings!</h1>
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
}

export default FeatureBookings;

import { useCoreData } from '@home-improvement-hub/data';

export function FeatureBookings() {
  const { agents, services, customers, jobs, reviews } = useCoreData();
  return (
    <div>
      <h1>Welcome to FeatureBookings!</h1>
      <pre>{JSON.stringify(agents, null, 2)}</pre>
      <pre>{JSON.stringify(services, null, 2)}</pre>
      <pre>{JSON.stringify(customers, null, 2)}</pre>
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
      <pre>{JSON.stringify(reviews, null, 2)}</pre>

    </div>
  );

}

export default FeatureBookings;

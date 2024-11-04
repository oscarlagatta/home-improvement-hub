import { useAgents } from '@home-improvement-hub/data';


export function FeatureAgents() {
  const { agents } = useAgents();
  return (
    <div>
      <h1>Welcome to FeatureAgents!</h1>
      <pre>{JSON.stringify(agents, null, 2)}</pre>
    </div>
  );
}


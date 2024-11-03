import { useQuery } from '@tanstack/react-query';
import { AgentDto, getAgents } from '../api';


export function useAgents() :{
  agents: AgentDto[] | undefined;
  isLoading: boolean;
  error: Error | null
} {
  const { data: agents, isLoading, error } = useQuery<AgentDto[], Error>({
    queryKey: ['agentsData'],
    queryFn: async () => {
      const response = await getAgents();
      if (response.data) {
        return response.data as AgentDto[];
      } else {
        throw new Error('Failed to fetch agents');
      }
    }
  });

  return { agents, isLoading, error}
}

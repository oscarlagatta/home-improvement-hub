import { useQuery } from '@tanstack/react-query';
import { AgentDto, CustomerDto, getAgents, JobDto, ReviewDto, ServiceDto } from '../api';
import {
  getAgentsOptions,
  getCustomersOptions,
  getJobsOptions, getReviewsOptions,
  getServicesOptions
} from '../api/@tanstack/react-query.gen';


export function useAgents(): {
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

  return { agents, isLoading, error };
}

export function useCoreData() {
  const agents = useQuery(getAgentsOptions());

  const services = useQuery(getServicesOptions());

  const customers = useQuery(getCustomersOptions());

  const jobs = useQuery(getJobsOptions());

  const reviews = useQuery(getReviewsOptions());

  return {
    agents: (agents.data as AgentDto[]),
    services: (services.data as ServiceDto[]),
    customers: (customers.data as CustomerDto[]),
    jobs: (jobs.data as JobDto[]),
    reviews: (reviews.data as ReviewDto[]),
  };
}

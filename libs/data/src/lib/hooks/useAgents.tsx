import { useQuery } from '@tanstack/react-query';
import { AgentDto, CustomerDto, JobDto, ReviewDto, ServiceDto } from '../api';
import {
  getAgentsOptions,
  getCustomersOptions,
  getJobsOptions,
  getReviewsOptions,
  getServicesOptions,
} from '../api/@tanstack/react-query.gen';

export function useCoreData() {
  const agents = useQuery(getAgentsOptions());

  const services = useQuery(getServicesOptions());

  const customers = useQuery(getCustomersOptions());

  const jobs = useQuery(getJobsOptions());

  const reviews = useQuery(getReviewsOptions());

  return {
    agents: agents.data as AgentDto[],
    services: services.data as ServiceDto[],
    customers: customers.data as CustomerDto[],
    jobs: jobs.data as JobDto[],
    reviews: reviews.data as ReviewDto[],
  };
}

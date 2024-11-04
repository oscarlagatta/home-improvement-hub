import { useMutation, useQuery } from '@tanstack/react-query';
import { JobDto } from '../api';
import {
  deleteJobsByIdMutation,
  getJobsOptions,
  postJobsMutation,
  putJobsByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useJobs(options = {}) {
  const query = useQuery({
    ...getJobsOptions(),
    ...options,
  });

  // Service Mutations
  const updateJob = useMutation(putJobsByIdMutation());
  const createJob = useMutation(postJobsMutation());
  const deleteJob = useMutation(deleteJobsByIdMutation());

  return {
    jobs: query.data as JobDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateJob: updateJob.mutate,
    createJob: createJob.mutate,
    deleteJob: deleteJob.mutate,
  };
}

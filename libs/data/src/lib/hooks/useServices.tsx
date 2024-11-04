import { useMutation, useQuery } from '@tanstack/react-query';
import { ServiceDto } from '../api';
import {
  deleteServicesByIdMutation,
  getServicesOptions,
  postServicesMutation,
  putServicesByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useServices(options = {}) {
  const query = useQuery({
    ...getServicesOptions(),
    ...options,
  });

  // Service Mutations
  const updateService = useMutation(putServicesByIdMutation());
  const createService = useMutation(postServicesMutation());
  const deleteService = useMutation(deleteServicesByIdMutation());

  return {
    services: query.data as ServiceDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateService: updateService.mutate,
    createService: createService.mutate,
    deleteService: deleteService.mutate,
  };
}

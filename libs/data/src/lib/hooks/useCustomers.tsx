import { useMutation, useQuery } from '@tanstack/react-query';
import { CustomerDto } from '../api';
import {
  deleteCustomersByIdMutation,
  getCustomersOptions,
  postCustomersMutation,
  putCustomersByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useCustomers(options = {}) {
  const query = useQuery({
    ...getCustomersOptions(),
    ...options,
  });

  // Service Mutations
  const updateCustomer = useMutation(putCustomersByIdMutation());
  const createCustomer = useMutation(postCustomersMutation());
  const deleteCustomer = useMutation(deleteCustomersByIdMutation());

  return {
    customers: query.data as CustomerDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateCustomer: updateCustomer.mutate,
    createCustomer: createCustomer.mutate,
    deleteCustomer: deleteCustomer.mutate,
  };
}

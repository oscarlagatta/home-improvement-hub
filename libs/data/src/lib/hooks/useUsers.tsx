import { useMutation, useQuery } from '@tanstack/react-query';
import { UserDto } from '../api';
import {
  deleteUsersByIdMutation,
  getUsersOptions,
  postUsersMutation,
  putUsersByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useUsers(options = {}) {
  const query = useQuery({
    ...getUsersOptions(),
    ...options,
  });

  const updateUser = useMutation(putUsersByIdMutation());
  const createUser = useMutation(postUsersMutation());
  const deleteUser = useMutation(deleteUsersByIdMutation());

  return {
    userList: query.data as UserDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateUser: updateUser.mutate,
    createUser: createUser.mutate,
    deleteUser: deleteUser.mutate,
  };
}

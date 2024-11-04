import { useMutation, useQuery } from '@tanstack/react-query';
import { AgentDto } from '../api';
import {
  deleteAgentsByIdMutation,
  getAgentsOptions,
  postAgentsMutation,
  putAgentsByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useAgents(options = {}) {
  const query = useQuery({
    ...getAgentsOptions(),
    ...options,
  });

  const updateAgent = useMutation(putAgentsByIdMutation());
  const createAgent = useMutation(postAgentsMutation());
  const deleteAgent = useMutation(deleteAgentsByIdMutation());

  return {
    agents: query.data as AgentDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateAgent: updateAgent.mutate,
    createAgent: createAgent.mutate,
    deleteAgent: deleteAgent.mutate,
  };
}

import { useMutation, useQuery } from '@tanstack/react-query';
import { ReviewDto } from '../api';
import {
  deleteReviewsByIdMutation,
  getReviewsOptions,
  postReviewsMutation,
  putReviewsByIdMutation,
} from '../api/@tanstack/react-query.gen';

export function useReviews(options = {}) {
  const query = useQuery({
    ...getReviewsOptions(),
    ...options,
  });

  // Service Mutations
  const updateReview = useMutation(putReviewsByIdMutation());
  const createReview = useMutation(postReviewsMutation());
  const deleteReview = useMutation(deleteReviewsByIdMutation());

  return {
    reviews: query.data as ReviewDto[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateReview: updateReview.mutate,
    createReview: createReview.mutate,
    deleteReview: deleteReview.mutate,
  };
}

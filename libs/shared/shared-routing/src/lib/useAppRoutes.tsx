import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export function useAppRoutes() {
  return useRoutes(routes);
}

import { RouterProvider } from 'react-router-dom';
import { router } from '@home-improvement-hub/routing';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;

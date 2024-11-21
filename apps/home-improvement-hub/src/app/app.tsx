// export function App() {
//   return (
//     <div>
//       <h1>Welcome to App</h1>
//     </div>
//   );
//
// }
//
// export default App;


import { RouterProvider } from 'react-router-dom';
import { router } from '@home-improvement-hub/routing';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;

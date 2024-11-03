import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { client } from '@home-improvement-hub/data';

import App from './app/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { API_URL } from '@home-improvement-hub/utils';

client.setConfig({
  baseURL: API_URL,
});
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

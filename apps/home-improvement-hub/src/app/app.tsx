import { ThemeProvider } from 'next-themes';
import { Layout } from '@home-improvement-hub/shared-ui';

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Layout />
      {/*<Router>*/}
      {/*  <ErrorBoundary>{useAppRoutes()}</ErrorBoundary>*/}
      {/*</Router>*/}
    </ThemeProvider>
  );
}

export default App;

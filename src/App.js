import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import routes from "./routes";
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {

  const privateRoute = routes.privateRoute.map(({path, element}) => (
    <Route key={path} path={path} element={element} />
  ));

  const publicRoute = routes.publicRoute.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <QueryClientProvider client={queryClient}>
    <Suspense fallback="Loading...">
      <AuthProvider>
        <Toaster position="top-center" />
        <Router>
          <Routes>
            {publicRoute}
            {privateRoute}
          </Routes>
        </Router>
        </AuthProvider>
    </Suspense>
    </QueryClientProvider>
  );
}

export default App;

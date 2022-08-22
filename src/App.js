import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import routes from "./routes";

function App() {

  const privateRoute = routes.privateRoute.map(({path, element}) => (
    <Route key={path} path={path} element={element} />
  ));

  const publicRoute = routes.publicRoute.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <Suspense fallback="Loading...">
      <AuthProvider>
        <Router>
          <Routes>
            {publicRoute}
            {privateRoute}
          </Routes>
        </Router>
        </AuthProvider>
    </Suspense>

  );
}

export default App;

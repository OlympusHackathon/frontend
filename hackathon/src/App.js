import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from './pages/dashboard';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path:"/dashboard",
      element: <Dashboard/>
    }
  ]);
  return ( <RouterProvider router={router} />
  );
}

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Converter from "./pages/converter";
import History from "./pages/history";
import Uploads from "./pages/uploads";
import { RootLayout } from "./components/root-layout";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#00080f",
        color: "white",
      },
    }),
  },
});
function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/converter",
          element: <Converter />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/uploads",
          element: <Uploads />,
        },
      ],
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
export default App;

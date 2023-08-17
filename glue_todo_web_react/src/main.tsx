import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// createBrowserRouter
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline />
      <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

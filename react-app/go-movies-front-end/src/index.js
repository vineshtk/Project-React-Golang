import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {index:true, element:<Home />},
      {
        path:"/movies",
        element:<Movies />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import App from './App.jsx'
import GraphPage from './GraphPage.jsx'
import ProductsPage from './ProductsPage.jsx'
import ApiPage from './ApiPage.jsx'
import MapPage from './MapPage.jsx'


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/GraphPage",
    element: <GraphPage/>
  },
  {
    path: "/ProductsPage",
    element: <ProductsPage/>
  },
  {
    path: "/ApiPage",
    element: <ApiPage/>
  },
  {
    path: "/MapPage",
    element: <MapPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



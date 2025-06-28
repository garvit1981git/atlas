import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Country from "./components/country";
import Contact from "./components/contact";
import Error from "./components/error";
import Condetails from "./components/countrydetails.jsx";
let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/country", element: <Country></Country> },
      { path: "/country/:id", element: <Condetails></Condetails> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);

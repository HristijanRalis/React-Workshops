import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.tsx";
import { CardsCont } from "./components/CardsCont/CardsCont.tsx";
import { CardDetail } from "./components/CardDetails/CardDetails.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CardsCont />,
      },
      {
        path: "detail/:id",
        element: <CardDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

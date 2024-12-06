import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true,
  },
  {
    path: "/",
    element: (
      <p>
        Default page
        <Outlet />{" "}
      </p>
    ),
    children: [
      {
        path: "/tasks-list",
        element: <p>Task List</p>,
      },
    ],
  },
  {
    path: "*",
    element: <p>Error 404 - Not fount</p>,
  },
]);

export default function AppRouter() {
  const authenticate = false;

  useEffect(() => {
    //s'autentifier
    //   authenticate();
  }, [authenticate]);

  return <RouterProvider router={router} />;
}

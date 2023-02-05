import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { childLoginRoutes, LoginRoutes } from "../auth/routes/LoginRoutes";
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoutes />,
    children: childLoginRoutes,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childHeroesRoutes,
  },

]);

export const AppRouter = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
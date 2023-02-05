import { Navigate, Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../ui";
import { DcPages, ErrorPage, HeroPage, HomePage, MarvelPage, SearchPage } from "../Pages";


export const childHeroesRoutes = [
  { path: "/marvel", element: <MarvelPage />, errorElement: <ErrorPage /> },
  { path: "/dc", element: <DcPages /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/hero/:id", element: <HeroPage /> },
  { path: "/home", element: <HomePage /> },
  // { path: "/", element: <Navigate to='/home' />}
];

export const HeroesRoutes = () => {

  return (
    <>
      <Navbar />
      <div className="container" >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

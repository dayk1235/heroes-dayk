import { Navigate, Outlet } from "react-router-dom";
import { ErrorPage } from "../../heroes";
import { LoginPage, SingIn } from "../Pages";


export const childLoginRoutes = [
    { path: "/login", element: <LoginPage />, errorElement: <ErrorPage /> },
    { path: "/singin", element: <SingIn />, },
    { path: "/", element: <Navigate to="/login" /> },
];

export const LoginRoutes = () => {
    return (
        <>
            <div className="container" >
                <Outlet />
            </div>
        </>
    )
}

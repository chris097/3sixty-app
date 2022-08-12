import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { PRIVATE_ROUTE } from "./url";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));


export const privateRoute = [
    {
        path: PRIVATE_ROUTE.AUTH_LOGIN,
        element: <Login />
    },
    {
        path: PRIVATE_ROUTE.AUTH_REGISTER,
        element: <Register />
    },
    {
        path: PRIVATE_ROUTE.AUTH_RESET_PASSWORD,
        element: <ResetPassword />
    },
    {
        path: PRIVATE_ROUTE.AUTH_FORGOT_PASSWORD,
        element: <ForgotPassword />
    },
    {
        path: PRIVATE_ROUTE.AUTH_NOT_FOUND,
        element: <Navigate to={PRIVATE_ROUTE.AUTH_LOGIN} replace />
    }
]
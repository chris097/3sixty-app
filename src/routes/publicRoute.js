import {lazy} from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayouts";
const Home = lazy(() => import("../pages/Home"));
const DashboardNote = lazy(() => import("../pages/dashboard/DashboardNote"))
import { PUBLIC_ROUTE } from "./url";

export const publicRoute = [
    { 
        path: PUBLIC_ROUTE.HOME_PAGE,
        element: Home
    },
    {
        path: PUBLIC_ROUTE.DASHBOARD_NOTE,
        element: ComposeInternalLayouts(DashboardNote)
    }
]
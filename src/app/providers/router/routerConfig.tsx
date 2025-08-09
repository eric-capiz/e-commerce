import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { routePaths, AppRoutes } from "@/shared/config";
import type { RouteProps } from "react-router";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.Home],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.Login],
    element: <LoginPage />,
  },
];

import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import type { RouteProps } from "react-router";

const AppRoutes = {
  Home: "home",
  Login: "login",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Login]: "/login",
};

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

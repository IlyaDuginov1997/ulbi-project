import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { AboutPage } from 'pages/About';

enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};

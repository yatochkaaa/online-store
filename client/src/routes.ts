import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ROUTE.ADMIN,
    Component: Admin,
  },
  {
    path: ROUTE.BASKET,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: ROUTE.SHOP,
    Component: Shop,
  },
  {
    path: ROUTE.LOGIN,
    Component: Auth,
  },
  {
    path: ROUTE.REGISTRATION,
    Component: Auth,
  },
  {
    path: ROUTE.DEVICE + '/:id',
    Component: DevicePage,
  },
];

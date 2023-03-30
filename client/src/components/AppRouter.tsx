import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useStores } from "../store/hooks/useStores";
import { ROUTE } from "../utils/consts";

const AppRouter: React.FC = () => {
  const { userStore } = useStores();

  return (
    <Routes>
      {userStore.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Navigate to={ROUTE.SHOP} />} />
    </Routes>
  );
};

export default AppRouter;

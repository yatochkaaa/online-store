import React from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useStores } from "./store/hooks/useStores";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App: React.FC = observer(() => {
  const { userStore } = useStores();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    check()
      .then((data: any) => {
        userStore.setUser(data);
        userStore.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

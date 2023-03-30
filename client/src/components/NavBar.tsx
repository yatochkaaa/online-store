import { observer } from "mobx-react-lite";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useStores } from "../store/hooks/useStores";
import { ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={ROUTE.SHOP}>КупиДевайс</Navbar.Brand>
        {userStore.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => navigate(ROUTE.ADMIN)}
            >
              Админ панель
            </Button>
            <Button
              variant="outline-light"
              className="ms-2"
              onClick={() => {
                userStore.setIsAuth(false);
                navigate(ROUTE.LOGIN);
              }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => {
                userStore.setIsAuth(true);
                navigate(ROUTE.LOGIN);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import { useStores } from "../store/hooks/useStores";
import { ROUTE } from "../utils/consts";

const Auth: React.FC = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === ROUTE.LOGIN;
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const click = async () => {
    try {
      let user: any;

      if (isLogin) {
        user = await login(email, password);
      } else {
        user = await registration(email, password);
      }
      userStore.setUser(user);
      userStore.setIsAuth(true);
      navigate(ROUTE.SHOP)
    } catch (err: any) {
      alert(err.response.data.message)
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 206 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email..."
          />
          <Form.Control
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Введите ваш пароль..."
          />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <Card.Link href={ROUTE.REGISTRATION}>
                  Зарегистрируйся!
                </Card.Link>
              </div>
            ) : (
              <div>
                Есть аккаунт? <Card.Link href={ROUTE.LOGIN}>Войдите!</Card.Link>
              </div>
            )}
            <Button variant="outline-success" onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;

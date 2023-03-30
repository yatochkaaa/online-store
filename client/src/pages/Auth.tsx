import { Card, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { useLocation } from "react-router-dom";
import { ROUTE } from "../utils/consts";

const Auth: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === ROUTE.LOGIN;
  console.log(location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 206 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
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
            <Button variant="outline-success">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;

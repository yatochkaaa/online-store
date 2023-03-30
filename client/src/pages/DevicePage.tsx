import React from "react";
import { Button, Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import bigStar from "../assets/bigStar.png";
import { fetchOneDevice } from "../http/deviceApi";
import { IDevice } from "../store/DeviceStore";

const DevicePage: React.FC = () => {
  const { id } = useParams();
  const [device, setDevice] = React.useState<IDevice>();

  React.useEffect(() => {
    if (id) {
      fetchOneDevice(Number(id)).then((data) => setDevice(data));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!device) {
   return <Spinner /> 
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: 300,
              width: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} грн</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, i) => (
          <Row
            key={info.id}
            style={{
              background: i % 2 === 0 ? "lightgray" : "transparent",
              padding: 8,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;

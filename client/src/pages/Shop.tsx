import { observer } from "mobx-react-lite";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import { useStores } from "../store/hooks/useStores";

const Shop: React.FC = observer(() => {
  const { deviceStore } = useStores();

  React.useEffect(() => {
    fetchTypes().then((data) => deviceStore.setTypes(data));
    fetchBrands().then((data) => deviceStore.setBrands(data));
    fetchDevices(null, null, 1, 3).then((data) => {
      deviceStore.setDevices(data.rows);
      deviceStore.setTotalCount(data.count);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchDevices(deviceStore.selectedType?.id, deviceStore.selectedBrand?.id, deviceStore.page, 3).then((data) => {
      deviceStore.setDevices(data.rows);
      deviceStore.setTotalCount(data.count);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceStore.page, deviceStore.selectedType, deviceStore.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;

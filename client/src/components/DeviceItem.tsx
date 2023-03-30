import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../store/DeviceStore";
import star from "../assets/star.png";
import { ROUTE } from "../utils/consts";

interface Props {
  device: IDevice;
}

const DeviceItem: React.FC<Props> = observer(({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(ROUTE.DEVICE + `/${device.id}`)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="mt-1 d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={star} width={14} height={14} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
});

export default DeviceItem;

import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import { useStores } from "../store/hooks/useStores";
import DeviceItem from "./DeviceItem";

const DeviceList: React.FC = observer(() => {
  const { deviceStore } = useStores();

  return (
    <Row className="d-flex">
      {deviceStore.devices.map(device => <DeviceItem device={device} key={device.id} />)}
    </Row>
  );
});

export default DeviceList;

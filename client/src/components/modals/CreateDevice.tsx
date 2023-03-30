import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceApi";
import { useStores } from "../../store/hooks/useStores";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface IInfo {
  number: number;
  title: string;
  description: string;
}

const CreateDevice: React.FC<Props> = observer(({ show, onHide }) => {
  const { deviceStore } = useStores();
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [file, setFile] = React.useState<File | null>(null);
  const [info, setInfo] = React.useState<IInfo[]>([]);

  React.useEffect(() => {
    fetchTypes().then((data) => deviceStore.setTypes(data));
    fetchBrands().then((data) => deviceStore.setBrands(data));
    fetchDevices().then((data) => deviceStore.setDevices(data.rows));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addInfo = () => {
    setInfo([...info, { number: Date.now(), title: "", description: "" }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const addDevice = () => {
    const formData = new FormData();

    if (
      file &&
      deviceStore.selectedBrand &&
      deviceStore.selectedBrand.id &&
      deviceStore.selectedType &&
      deviceStore.selectedType.id
    ) {
      formData.append("name", name);
      formData.append("price", price.toString());
      formData.append("img", file);
      formData.append("brandId", deviceStore.selectedBrand.id.toString());
      formData.append("typeId", deviceStore.selectedType.id.toString());
      formData.append("info", JSON.stringify(info));
      createDevice(formData).then(() => {
        onHide();
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="my-2">
            <Dropdown.Toggle>
              {(deviceStore.selectedType && deviceStore.selectedType.name) ||
                "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => deviceStore.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="my-2">
            <Dropdown.Toggle>
              {(deviceStore.selectedBrand && deviceStore.selectedBrand.name) ||
                "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => deviceStore.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;

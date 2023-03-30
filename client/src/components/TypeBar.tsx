import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";
import { useStores } from "../store/hooks/useStores";

const TypeBar: React.FC = observer(() => {
  const { deviceStore } = useStores();

  return (
    <ListGroup>
      {deviceStore._types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === deviceStore.selectedType?.id}
          key={type.id}
          onClick={() => deviceStore.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;

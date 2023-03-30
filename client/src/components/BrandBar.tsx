import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";
import { useStores } from "../store/hooks/useStores";

const BrandBar: React.FC = observer(() => {
  const { deviceStore } = useStores();

  return (
    <div className="d-flex flex-wrap">
      {deviceStore.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          key={brand.id}
          onClick={() => deviceStore.setSelectedBrand(brand)}
          border={
            brand.id === deviceStore.selectedBrand?.id ? "danger" : "light"
          }
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;

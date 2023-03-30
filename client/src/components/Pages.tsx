import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";
import { useStores } from "../store/hooks/useStores";

const Pages: React.FC = observer(() => {
  const { deviceStore } = useStores();
  const pageCount = Math.ceil(deviceStore.totalCount / deviceStore.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={deviceStore.page === page}
          onClick={() => {
            deviceStore.setPage(page);
          }}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;

import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns , fields, rows} from "./realgrid-data";
import "realgrid/dist/realgrid-style.css";
function RealGrid() {
  const [dataProvider, setDataProvider] = useState(null);
  const [gridView, setGridView] = useState(null);
  const realgridElement = useRef(null);

  useEffect(() => {
    const container = realgridElement.current;
    const provider = new LocalDataProvider(true);
    const grid = new GridView(container);

    grid.setDataSource(provider);
    provider.setFields(fields);
    grid.setColumns(columns);
    provider.setRows(rows);

    setDataProvider(provider);
    setGridView(grid);

    return () => {
      provider.clearRows();
      grid.destroy();
      provider.destroy();
    };
  }, []);

  return <div ref={realgridElement} style={{ height: "500px", width: "80%", margin: "0 auto" }}></div>;
}

export default RealGrid;

import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns , fields, rows} from "./realgrid-data";
import "realgrid/dist/realgrid-style.css";
import axios from 'axios';
import Button from '@mui/material/Button';

  // 데이터를 API에서 가져오기

function RealGrid() {
  const [dataProvider, setDataProvider] = useState(null);
  const [gridView, setGridView] = useState(null);
  const realgridElement = useRef(null);
 

    const [dataRows, setDataRows] = useState([]);

    // 데이터 조회 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/rows'); // 실제 API URL로 변경
        setDataRows(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  useEffect(() => {
    const container = realgridElement.current;
    const provider = new LocalDataProvider(true);
    const grid = new GridView(container);

    // axios("http://localhost:8080/rows")
    //   .then((response) => {
    //     if (response.status === 200) {
    //       const fetchedData = response.data;
    //       console.log("fetchedData", fetchedData);
    //       setDataProvider(fetchedData);
    //       grid.setDataSource(provider);
    //       provider.setFields(fields);
    //       grid.setColumns(columns);
    //       provider.setRows(dataRows);
    //     }
    //   })

    //   .catch((err) => {});
    // fetchData();
    // console.log(dataRows)
    // console.log(rows)

    grid.setDataSource(provider);
    provider.setFields(fields);
    grid.setColumns(columns);
    provider.setRows(dataRows);

    setDataProvider(provider);
    setGridView(grid);

    return () => {
      provider.clearRows();
      grid.destroy();
      provider.destroy();
    };
  }, [dataRows]);

  return <><div ref={realgridElement} style={{ height: "500px", width: "80%", margin: "0 auto" }}></div>
  <div><Button variant="contained" onClick={fetchData}>Add</Button></div>
  </> 
  ;
}

export default RealGrid;

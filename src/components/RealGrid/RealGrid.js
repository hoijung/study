import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields, rows } from "./realgrid-data";
import "realgrid/dist/realgrid-style.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import getGridSaveData from "utils/gridUtil";
import deleteGridData from "utils/gridUtil2";

// 데이터를 API에서 가져오기

function RealGrid() {
  const [dataProvider, setDataProvider] = useState(null);
  const [gridView, setGridView] = useState(null);
  const realgridElement = useRef(null);
  const [isInit, setIsInit] = useState(true);
  const [isSave, setIsSave] = useState(1);

  const serverIp = process.env.REACT_APP_Server_IP;

  const [dataRows, setDataRows] = useState([]);

  // 데이터 조회 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(serverIp + '/rows'); // 실제 API URL로 변경
      setDataRows(response.data);
      setIsInit(false)
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 데이터 조회 함수
  const newHandle = () => {
    // debugger
    dataProvider.addRow()
  };

  // 데이터 조회 함수
  const delHandle = () => {
    let rowState = dataProvider.getRowState(0);
    // alert(rowState)
    // debugger
    deleteGridData(gridView, dataProvider);
    // dataProvider.removeRow(1)
  };

  const saveHandle = async () => {
    console.log("saveHandle..")
    gridView.commit();

    const sub02 = getGridSaveData(dataProvider);

    // sub02.map((p) => (

    // ));

    const result = sub02.map((p) => {
      p.availableSizes = p.availableSizes.split(",");
      return p;
    });

    // {products?.map((p) => (
    //   <Product product={p} key={p.sku} />
    // ))}

    try {
      await Promise.all(
        result.filter(d => "U" === d.iudFlag).map(d => axios.post(serverIp + "/updateProduct", d)),
        result.filter(d => "I" === d.iudFlag).map(d => axios.post(serverIp + "/insertProduct", d)),
        result.filter(d => "D" === d.iudFlag).map(d => axios.post(serverIp + "/deleteProduct", d))
      );
      fetchData();
    } catch (error) {
      console.error("Error saving row:", error);
      return null; // Return null to revert changes
    }

    //  debugger
    // console.log("sub01" + JSON.stringify(sub01))
  }

  useEffect(() => {
    console.log("useEffect..")
    const container = realgridElement.current;
    const provider = new LocalDataProvider(true);
    const grid = new GridView(container);

    if (isInit) {
      fetchData();
    }

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

  return <>
    <div ref={realgridElement} style={{ height: "500px", width: "80%", margin: "0 auto" }}></div>
    <Stack spacing={2} direction="row">
      <div><Button variant="contained" onClick={fetchData}>search</Button></div>
      <div><Button variant="contained" onClick={newHandle}>Add</Button></div>
      <div><Button variant="contained" onClick={delHandle}>Delete</Button></div>
      <div><Button variant="contained" onClick={saveHandle}>Save</Button></div>
    </Stack>
  </>
    ;
}

export default RealGrid;

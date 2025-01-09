import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import getSeverIp from 'utils/getSeverIp';

export default function DataGridDemo() {

  const [rows, setRows] = useState([]);
  const [addRows, setAddRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: true },
    { field: "title", headerName: "Title", width: 270, editable: true },
    { field: "description", headerName: "description", width: 130, editable: true },
    { field: "price", headerName: "price", width: 100, editable: true },
    { field: "style", headerName: "style", width: 220, editable: true },
    { field: "sku", headerName: "sku", width: 180, editable: true },
  ];

  const serverIp = getSeverIp();
  console.log("serverIp" + serverIp+'/products')

  // 데이터를 API에서 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  const createRandomRow = () => ({
    id: Date.now()  // 새 행 생성 시 고유 ID 생성
    // name: "Random Name",
    // age: Math.floor(Math.random() * 100),
  });

  // 데이터 조회 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(serverIp+'/products'); // 실제 API URL로 변경
      setRows(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Handle server-side save
  const handleSave = async (newRow:any) => {   
    try {

      for (let row of addRows) {
        await axios.post(serverIp+"/product", row).then((res) => {
        });
      }
      fetchData();
      return newRow; // Update the grid with the new row
    } catch (error) {
      console.error("Error saving row:", error);
      return null; // Return null to revert changes
    }
  };

  const handleAddRow = () => {
    // @ts-ignore
    setRows((prevRows) => [...prevRows, createRandomRow()]);
 // @ts-ignore
    setAddRows((prevAddRows) => [...prevAddRows, createRandomRow()]);
  };

  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const handleDelete = async () => {
    try {

      for (let row of rowSelectionModel) {
        await axios.delete(serverIp + `/product/${row}`);
      }

      fetchData();
    } catch (error) {
      console.error("Error deleting rows:", error);
    }
  };

  const handleProcessRowUpdate = async (newRow:any) => {
    // const isNewRow = !newRow.id; // id가 없는 경우 추가된 행으로 판단
    
    let isNewRow = false;
    // debugger
    addRows.forEach(e => {
       // @ts-ignore
      if (e.id === newRow.id) {
        isNewRow = true;
      }
    });
    // if (newRow.id in addRows) {
    //     isNewRow = true;
    // }
    console.log(isNewRow);
  };

  const updateError = () => {
    console.log("Error");
  }

  return (

    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid editMode="row" rows={rows} columns={columns}
        checkboxSelection
        processRowUpdate={handleProcessRowUpdate}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        onProcessRowUpdateError={updateError}
      />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleAddRow}>Add</Button>
        <Button variant="contained" onClick={handleDelete}>Delete</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </Stack>
    </Box>
  );
}
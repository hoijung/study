import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect , useState} from 'react';
import axios from 'axios';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';  

  

export default function DataGridDemo() {
  
  const [rows, setRows] = useState([]);

//   availableSizes
// : 
// ["X", "L", "XL", "XXL"]
// contents
// : 
// null
// createdAt
// : 
// null
// createdBy
// : 
// null
// currencyFormat
// : 
// "$"
// currencyId
// : 
// "USD"
// description
// : 
// "14/15 s/nº"
// id
// : 
// 0
// installments
// : 
// 9
// isFreeShipping
// : 
// true
// price
// : 
// 10.9
// sku
// : 
// 8552515751438644
// style
// : 
// "White T-shirt"
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 270 },
    { field: "description", headerName: "description", width: 130 },
    { field: "price", headerName: "price", width: 100 },
    { field: "style", headerName: "style", width: 220 },
    { field: "sku", headerName: "sku", width: 180 },    
  ];

// 데이터를 API에서 가져오기
useEffect(() => {
  axios
    .get("//localhost:8080/products") // API 경로
    .then((response) => {
      setRows(response.data.products); // 데이터를 상태에 저장
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

  return (
    // <div style={{ height: 300, width: '100%' }}>
    //   <DataGrid rows={rows} columns={columns} />
    // </div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
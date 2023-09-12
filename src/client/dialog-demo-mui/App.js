import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'firstName',
//         headerName: 'First name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'lastName',
//         headerName: 'Last name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 110,
//         editable: true,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


// export default function DataTable() {
//     return (
//         <div style={{ height: 800, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: { page: 0, pageSize: 5 },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
//         </div>
//     );
// }

const columns = [
  {
      field: 'dealer',
      headerName: 'Dealer',
      width: 150,
      editable: false,
  },
  {
      field: 'entryTime',
      headerName: 'Entry Time (UTC)',
      width: 150,
      editable: false,
  },
  {
      field: 'exitTime',
      headerName: 'Taken Out Time (UTC)',
      width: 150,
      editable: false,
  },
  {
      field: 'brand',
      headerName: 'Brand',
      width: 150,
      editable: false,
  },
  {
      field: 'modelAndTitle',
      headerName: 'Model and Title',
      width: 150,
      editable: false,
  },
  {
      field: 'carUrl',
      headerName: 'URL',
      width: 150,
      editable: false,
  },
];

export default function App() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      google.script.run.withSuccessHandler(data=>setData(data)).getAllTakenOutCars();
    }, []);
  
    return (
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    );
  }
  
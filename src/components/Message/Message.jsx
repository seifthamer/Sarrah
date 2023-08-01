
import React from 'react';
import './Message.css';

import StarRatingComponent from 'react-star-rating-component';
const Table = () => {
  // Sample data
  const data = [
    {
      id: 1,
      name: 'Chiheb',
      description:<input/>,
      Button1: <button onClick={() => handleButtonClick(1)}>RÉPONDRE</button>,
      nb:   <StarRatingComponent 
      name="rate2" 
      editing={false}
      value={5}
    />,
      Button2: <button onClick={() => handleButtonClick(2)}>IGNORER</button>
    },
    {
      id: 2,
      name: 'Sarrah',
      description: <input/>,
      Button1: <button onClick={() => handleButtonClick(3)}>RÉPONDRE</button>,
      nb:   <StarRatingComponent 
      name="rate2" 
      editing={false}
      value={4}
    />,
      Button2: <button onClick={() => handleButtonClick(4)}>IGNORER</button>
    },
    {
      id: 3,
      name: 'Hadyl',
      description: <input/>,
      Button1: <button onClick={() => handleButtonClick(5)}>RÉPONDRE</button>,
      nb:   <StarRatingComponent 
      name="rate2" 
      editing={false}
      value={2}
    />,
      Button2: <button onClick={() => handleButtonClick(6)}>IGNORER</button>
    },
  ];

  const handleButtonClick = (id) => {
    // Implement your button click logic here
    console.log(`Button with id ${id} clicked.`);
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr className='Tab'>
              <th>#</th>
              <th>User</th>
              <th>Description</th>
              <th>Nombre etoile</th>
              <th>+</th>
              <th>-</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.nb}</td>
                <td>{item.Button1}</td>
                <td>{item.Button2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;






// import React, { useState } from 'react';
// import DataTable from 'react-data-table-component';

// function Message() {
//   const columns = [
//     {
//       name: <h2>User</h2>,
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: <h2>Description</h2>,
//       selector: (row) => row.description,
//       sortable: true,
//     },
//     {
//       name: <h2>Button</h2>,
//       selector: (row) => row.Button,
//       sortable: true,
//     },
//   ];

//   const data = [
//     {
//       id: 1,
//       name: 'Chiheb',
//       description: 'kabten chiheb',
//     },
//     {
//       id: 2,
//       name: 'Sarrah',
//       description: (
//         <p>
//           walahi service halla hlila ye shoumi o el blombier tbouled aliya o
//           zid baresha ghali b 10 DT
//         </p>
//       ),
//     },
//     {
//       id: 3,
//       name: 'Hadyl',
//       description: '',
//     },
//   ];

//   const [records, setRecords] = useState(data);

//   function handleFilter(event) {
//     const newData = data.filter((row) => {
//       return row.name.toLowerCase().includes(event.target.value.toLowerCase());
//     });

//     setRecords(newData);
//   }

//   return (
//     <div className="col">
//       <h1>Reclamation</h1>
//       <div className="dataTableContainer">
//         <DataTable
//           columns={columns}
//           data={records}
//           selectableRows
//           fixedHeader
//           pagination
//         ></DataTable>
//       </div>
//     </div>
//   );
// }

// export default Message;






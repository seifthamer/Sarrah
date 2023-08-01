import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./Service.css";
import {AiOutlineSearch} from "react-icons/ai";

function Service() {
  const handleAddClick = () => {
    // Add functionality here
    alert("Add button clicked!");
  };

  const handleRemoveClick = () => {
    // Remove functionality here
    alert("Remove button clicked!");
  };
  const handleUpdateClick = () => {
    // Remove functionality here
    alert("update button clicked!");
  };

 

  const columns = [
    {
      name: <h2>Service</h2>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <h2>Availibility</h2>,
      selector: (row) => row.lieu,
      sortable: true,
    },
    {
      name: <h2>Number of service providers</h2>,
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: <h2> Ajout </h2>,
      selector: (row) => row.butt1,
      sortable: true,
    },
    {
      name: <h2>Delete </h2>,
      selector: (row) => row.butt2,
      sortable: true,
    },
    {
      name: <h2>Update</h2>,
      selector: (row) => row.butt3,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "plombier",
      lieu: "bohsina",
      number: "9",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
      
     
     

    },
    {
      id: 2,
      name: "electricien",
      lieu: "tafela",
      number: "6",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
    {
      id: 3,
      name: "baney",
      lieu: "hamem soussa",
      number: "26",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
    {
      id: 4,
      name: "sodure",
      lieu: "jawhra",
      number: "4",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
    {
      id: 5,
      name: "aluminium",
      lieu: "sidi bouali",
      number: "11",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
    {
      id: 6,
      name: "belar",
      lieu: "beb bhar",
      number: "5",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
    {
      id: 7,
      name: "cook",
      lieu: "khzema",
      number: "2",
      butt1: <button onClick={handleAddClick}> ADD </button>,
      butt2: <button onClick={handleRemoveClick}>Remove</button>,
      butt3: <button onClick={handleUpdateClick} >Update</button>
    },
  ];

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className="col">
      <div className="text-end">
        <input type="text" onChange={handleFilter} />
         <AiOutlineSearch className="Aiou"/> 
      </div>
  
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}

export default Service;

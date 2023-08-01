

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./Order.css";
// import {AiOutlineSearch} from "react-icons";


function Order() {
  const columns = [
    {
      selector: (row) => row.name,
      sortable: true,
    },
    {
      selector: (row) => row.description,
      sortable: true,
    },

    {
      selector: (row) => row.nb,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Plombier",
      description: "55%",
    },
    {
      id: 2,
      name: "Electricien",
      description: "30%",
    },
    {
      id: 3,
      name: "Femme de ménage",
      description: "78%",
    },
    {
      id: 3,
      name: "Baney",
      description: "90%",
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
    <div className="orders_container">
      <div>
        <h1>Top Required</h1>
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  );
}

export default Order;

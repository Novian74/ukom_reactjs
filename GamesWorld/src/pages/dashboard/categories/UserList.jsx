// import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../../Api";
import swal from "sweetalert";

export default function UserList() {
  // STATE
  const [user, setUser] = useState([]);

  console.log(user);

  useEffect(() => {
    getUserList();
  }, []);

  // === GET USER List ===
  const getUserList = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/indexuser");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Button
  const deleteButton = (id) => {
    const handleDelete = () => {
      try {
        Api.delete(`/api/user/${id}`).then((response) => {
          swal("Success!", "Berhasil Dihapus!", "success");
          getUserList();
        });
        console.log("berhasil");
      } catch (error) {
        console.error(error);
        console.log("Gagal");
      }
    };
    return (
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    );
  };

  return (
    <>
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">User List</h1>
        </div>
        <div className="row align-items-center mb-3 ms-1">
          {/* AddGame button */}
          <button
            style={{ width: "10vw", marginLeft: "8px" }}
            type="button"
            className="btn btn-outline-success"
            onClick={() => (window.location.href = "/admin/register")}
          >
            Register Admin
          </button>
        </div>

        <div className="col mb-4">
          <div
            className="card"
            style={{ backgroundColor: "#27293d", color: "white" }}
          >
            <DataTable
              // selectionMode="single"
              // selection={selectedProduct}
              // onSelectionChange={(e) => setSelectedProduct(e.value)}
              // dataKey="id"
              paginator
              rows={5}
              value={user}
              sortMode="multiple"
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="name"
                header="Nama"
                style={{ width: "10rem" }}
                sortable
                filter
                filterPlaceholder="Search by name"
              ></Column>
              <Column
                field="email"
                header="Email"
                style={{ textAlign: "center", width: "30rem" }}
                sortable
                filter
                filterPlaceholder="Search by rate"
              ></Column>
              <Column
                field="role"
                header="Role"
                style={{ textAlign: "center", width: "30rem" }}
                sortable
                filter
                filterPlaceholder="Search by rate"
              ></Column>
              <Column
                body={({ id }) => deleteButton(id)}
                header="Delete"
                style={{ textAlign: "center", width: "30rem" }}
                sortable
                filter
                filterPlaceholder="Search by rate"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

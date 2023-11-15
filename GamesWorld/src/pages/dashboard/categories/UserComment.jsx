// import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../../../Api";
import swal from "sweetalert";

export default function UserComment() {
  // STATE
  const [comments, setComments] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(comments);

  useEffect(() => {
    getUserComments();
  }, []);

  // === GET USER COMMENTS ===
  const getUserComments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/komen");
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //  === BUTTON ====
  // Upload Button
  const UploadButton = (id) => {
    const handleUpload = () => {
      const formUpload = new FormData();
      formUpload.append("upload", "1");
      formUpload.append("_method", "PUT");

      Api.post("api/komen/upload/" + id, formUpload).then((response) => {
        swal("Success!", "Berhasil Diupload!", "success");
        getUserComments();
      });
    };
    return (
      <button type="button" className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    );
  };
  // Delete Button
  const deleteButton = (id) => {
    const handleDelete = () => {
      Api.delete(`/api/komen/${id}`).then((response) => {
        swal("Success!", "Berhasil Dihapus!", "success");
        getUserComments();
      });
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
          <h1 className="h3 mb-0 text-light">User Comments</h1>
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
              showGridlines
              value={comments}
              sortMode="multiple"
              tableStyle={{ minWidth: "50rem" }}
            >
              {/* <Column
                field="idkomen"
                header="Id"
                style={{ width: "5rem" }}
                sortable
                filter
                filterPlaceholder="Search by id"></Column> */}
              <Column
                field="tanggal"
                header="Tanggal"
                style={{ width: "12rem" }}
                sortable
                filter
                filterPlaceholder="Search by date"
              ></Column>
              <Column
                field="name"
                header="Nama"
                style={{ width: "10rem" }}
                sortable
                filter
                filterPlaceholder="Search by name"
              ></Column>
              <Column
                field="nama_game"
                header="Game"
                style={{ width: "10rem" }}
                sortable
                filter
                filterPlaceholder="Search by name"
              ></Column>

              <Column
                field="komen"
                header="Comments"
                style={{ textAlign: "center", width: "30rem" }}
                sortable
                filter
                filterPlaceholder="Search by rate"
              ></Column>
              <Column
                field="aksi"
                header="Kategori"
                style={{ textAlign: "center", width: "1rem" }}
                sortable
                filter
                filterPlaceholder="Search by kategori"
                body={(rowData) => {
                  const aksi = rowData.aksi;
                  const teks =
                    aksi === 0
                      ? "komentar"
                      : aksi === 1
                      ? "reply"
                      : "";

                  return <span>{teks}</span>;
                }}
              ></Column>

              <Column
                body={(rowData) => {
                  if (rowData.upload === 0) {
                    return UploadButton(rowData.id);
                  } else {
                    return <span>Sudah Diupload</span>;
                  }
                }}
                header="Upload"
                style={{ width: "8rem" }}
              ></Column>

              <Column
                body={({ id }) => deleteButton(id)}
                header="Delete"
                style={{ width: "8rem" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

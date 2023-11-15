// import { useState } from "react";
// import CreatePost from "./CreatePost";
// import DataTable from "datatables.net-dt";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Api from "../../../Api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


export default function GameList() {
  const navigate = useNavigate()
  // === STATE ===
  const [allGames, setallGames] = useState([]);

  console.log(allGames);

  useEffect(() => {
    getallGames();
  }, []);

  // === GET ALL GAMES ===
  const getallGames = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/game");
      setallGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Body Template to show image on table
  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.gambar} alt={rowData.gambar} width={128} />;
  };

  // === BUTTON ACTION TABLE ===
  // Update Button
  const updateButton = (idgame) => {
    const handleUpdate = () => {
      navigate(`/admin/gamelist/editgame/${idgame}`);
    };
    return (
      <button type="button" className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    );
  };

  // Delete Button
  const deleteButton = (idgame) => {
    const handleDelete = () => {
      Api.delete(`/api/game/${idgame}`).then((response) => {
        swal("Success!", "Berhasil Dihapus!", "success");
        getallGames();
      });
    };
    return (
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    );
  };

  return (
    <div>
      {/* Page Content */}
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">All Game</h1>
        </div>
        <div className="row align-items-center">
          {/* AddGame button */}
          <button
            style={{ width: "10vw", marginLeft: "8px"}}
            type="button"
            className="btn btn-outline-success mb-3 ml-3"
            onClick={() => (window.location.href = "/admin/gamelist/addgame")}
          >
            Add Game
          </button>
        </div>
      </div>
      <div className="col mb-4">
        <div
          className="card"
          style={{ backgroundColor: "#27293d", color: "white" }}>
          <DataTable
          value={allGames}
          paginator
          rows={2}
          // rowsPerPageOptions={[5, 10, 25, 50]}
          sortMode="multiple">
          <Column
            field="nama_game"
            header="Game Name"
            style={{ width: "12rem" }}
            sortable
            filter
            filterPlaceholder="Search by Game Name"></Column>
          <Column
            field="kategori"
            header="Category"
            style={{ width: "8rem" }}
            sortable
            filter
            filterPlaceholder="Search by Category"></Column>
          <Column
            field="tanggal"
            header="Tanggal"
            style={{ width: "10rem" }}
            sortable
            filter
            filterPlaceholder="Search by Date"></Column>
          <Column
            field="gambar"
            body={imageBodyTemplate}
            header="Gambar"
            style={{ width: "15rem", textAlign: "center" }}></Column>

          <Column
            body={({ idgame }) => updateButton(idgame)}
            header="Update"
            style={{ width: "8rem" }}></Column>
          <Column
            body={({ idgame }) => deleteButton(idgame)}
            header="Delete"
            style={{ width: "8rem" }}></Column>
        </DataTable>
        </div>
      </div>
    </div>
  );
}

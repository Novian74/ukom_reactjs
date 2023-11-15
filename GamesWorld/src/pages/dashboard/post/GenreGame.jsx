import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Api from "../../../Api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function GenreGame() {
  const [genreGame, setGenreGame] = useState([]);
  const navigate = useNavigate();

  console.log(genreGame);
  const getKategori = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/kategori");
      setGenreGame(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.gambar} alt={rowData.gambar} width={128} />;
  };

  // === BUTTON ACTION TABLE ===
  // Update Button
  const updateButton = (idkategori) => {
    const handleUpdate = () => {
      navigate(`/admin/genregame/editgenre/${idkategori}`);
    };
    return (
      <button type="button" className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    );
  };
  // Delete Button
  const deleteButton = (idkategori) => {
    const handleDelete = () => {
      Api.delete(`/api/kategori/${idkategori}`).then((response) => {
        swal("Success!", "Berhasil Dihapus!", "success");
        getKategori();
      });
    };
    return (
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    );
  };

  useEffect(() => {
    getKategori();
  }, []);

  return (
    <div>
      {/* Page Content */}
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">Genre Games</h1>
        </div>

        <div className="row align-items-center">
          {/* AddGame button */}
          <button
            style={{ marginLeft: "15px", width: "10rem" }}
            type="button"
            className="btn btn-outline-success mb-4"
            onClick={() =>
              (window.location.href = "/admin/genregame/addgenre")
            }>
            Add Genre
          </button>
        </div>
      </div>

      <div className="col mb-4">
        <div
          className="card"
          style={{ backgroundColor: "#27293d", color: "white" }}>
          <DataTable
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            value={genreGame}
            paginator
            rows={5}
            // rowsPerPageOptions={[5, 10, 25, 50]}
            sortMode="multiple"
            tableStyle={{ minWidth: "50rem" }}>
            <Column
              field="kategori"
              header="Category"
              style={{ width: "10rem" }}
              sortable
              filter
              filterPlaceholder="Search by category"></Column>
            <Column
              field="gambar"
              header="Poster"
              body={imageBodyTemplate}
              style={{ textAlign: "center", width: "20rem" }}></Column>
            <Column
              header="Update"
              body={({ idkategori }) => updateButton(idkategori)}
              style={{ textAlign: "center", width: "2rem" }}></Column>
            <Column
              header="Delete"
              body={({ idkategori }) => deleteButton(idkategori)}
              style={{ textAlign: "center", width: "2rem" }}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

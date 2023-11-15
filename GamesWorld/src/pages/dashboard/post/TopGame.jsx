// import { useState } from "react";
// import CreatePost from "./CreatePost";
// import DataTable from "datatables.net-dt";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function TopGame() {
  // === STATE ===
  const [topGame, setTopGame] = useState([]);

  console.log(topGame);

  useEffect(() => {
    getTopGame();
  }, []);

  // === GET TOP GAMES ===
  const getTopGame = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/game/card/1");
      setTopGame(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Body Template to show image
  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.gambar} alt={rowData.gambar} width={128} />;
  };

  return (
    <div>
      {/* Page Content */}
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">Recomended Game</h1>
        </div>
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
            rows={2}
            value={topGame}
            sortMode="multiple"
          >
            <Column
              field="nama_game"
              header="Game"
              style={{ width: "5rem" }}
              sortable
              filter
              filterPlaceholder="Search by name"
            ></Column>
            <Column
              field="kategori"
              header="Category"
              style={{ width: "3rem" }}
              sortable
              filter
              filterPlaceholder="Search by category"
            ></Column>
            <Column
              field="tanggal"
              header="Tanggal"
              style={{ width: "12rem" }}
              sortable
              filter
              filterPlaceholder="Search by date"
            ></Column>

            <Column
              field="deskripsi"
              header="desc"
              style={{ width: "50rem" }}
              sortable
              filter
              filterPlaceholder="Search by rate"
            ></Column>
            <Column
              field="gambar"
              header="Image"
              body={imageBodyTemplate}
              style={{ textAlign: "center", width: "5rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

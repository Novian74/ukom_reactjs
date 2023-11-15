import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState, useEffect } from "react";
export default function NewestGame() {
  const [newGame, setNewGame] = useState([]);
  console.log(newGame);

  const getNewGame = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/game/card/2");
      setNewGame(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.gambar} alt={rowData.gambar} width={128} />;
  };
  useEffect(() => {
    getNewGame();
  }, []);
  return (
    <>
      {/* Page Content */}
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">Newest Game</h1>
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
            value={newGame}
            sortMode="multiple"
            tableStyle={{ minWidth: "50rem" }}
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
            {/* <Column
                field="komen"
                header="Komentar"
                sortable
                filter
                filterPlaceholder="Search by name"></Column> */}
            {/* <Column field="quantity" header="Genre"></Column> */}
          </DataTable>
        </div>
      </div>
    </>
  );
}

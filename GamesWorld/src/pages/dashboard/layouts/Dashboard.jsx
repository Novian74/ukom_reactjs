import axios from "axios";
import { useEffect, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Dashboard() {
  const [gamelist, setGamelist] = useState([]);
  // const [kategori, setKategori] = useState([]);
  const [comments, setCommenst] = useState([]);
  const [genre, setGenre] = useState([]);
  const [userAdmin, setUserAdmin] = useState([]);
  const [komen, setKomen] = useState([]);

  useEffect(() => {
    getAllGameList();
    getAllComments();
    getAllGenre();
    getUserAdmin();
    getKomen();
  }, []);

  const getUserAdmin = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/indexuser");
      setUserAdmin(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getKomen = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/komen");
      setKomen(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllGameList = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/game");
      setGamelist(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getAllComments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/komen");
      // console.log(response.data);
      setCommenst(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getAllGenre = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/kategori");
      // console.log(response.data);
      setGenre(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      {/* Begin Page Content  */}
      <div className="container-fluid">
        {/* Page Heading  */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">Dashboard </h1>
        </div>

        {/* Content Row  */}
        <div className="row">
          {/* Authors  */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-primary shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Game List
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-light">
                      {gamelist.length} Game
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories  */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-info shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      User Comments
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 ml-3  font-weight-bold text-light">
                          {comments.length} Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comment-dots fa-2x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Post  */}
          <div className="col-12 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-success shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Genre
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-light">
                      {genre.length} Genre
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-friends fa-2x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* USER & ADMIN */}

        {/* Content Row  */}
        <div className="row">
          {/* Content Column  */}
          {/* Daftar Game */}
          <div className="col-lg-4 mb-4">
            <div style={{ backgroundColor: "#27293d" }} className="card shadow">
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card-header py-3"
              >
                <h6 className="m-0 font-weight-bold text-primary">
                  <a href="/admin/userlist" style={{ textDecoration: "none" }}>
                    User & Admin
                  </a>
                </h6>
              </div>
              <DataTable
                size="small"
                value={userAdmin}
                sortMode="multiple"
                tableStyle={{ minWidth: "10rem" }}
              >
                <Column
                  field="name"
                  header="User"
                  // style={{ width: "12rem" }}
                ></Column>
                <Column
                  field="email"
                  header="Email"
                  // style={{ width: "12rem" }}
                ></Column>
                <Column
                  field="role"
                  header="Role"
                  // style={{ width: "12rem" }}
                ></Column>
              </DataTable>
            </div>
          </div>
          {/* Recent Comment */}
          <div className="col-lg-8 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card shadow mb-4"
            >
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card-header py-3"
              >
                <h6 className="m-0 font-weight-bold text-primary">
                  <a
                    href="/admin/usercomment"
                    style={{ textDecoration: "none" }}
                  >
                    Latest Commentar
                  </a>
                </h6>
              </div>
              <DataTable
                size="small"
                value={komen}
                sortMode="multiple"
                tableStyle={{ minWidth: "10rem" }}
              >
                <Column
                  field="name"
                  header="User"
                  // style={{ width: "12rem" }}
                ></Column>
                <Column
                  field="nama_game"
                  header="Game"
                  // style={{ width: "12rem" }}
                ></Column>
                <Column
                  field="komen"
                  header="Komentar"
                  // style={{ width: "12rem" }}
                ></Column>
                <Column
                  field="aksi"
                  header="Type"
                  style={{ textAlign: "center", width: "1rem" }}
                  body={(rowData) => {
                    const aksi = rowData.aksi;
                    const teks =
                      aksi === 0 ? "komentar" : aksi === 1 ? "reply" : "";

                    return <span>{teks}</span>;
                  }}
                ></Column>
              </DataTable>
            </div>
            ;
          </div>
        </div>
      </div>
      {/* /.container-fluid  */}
    </>
  );
}

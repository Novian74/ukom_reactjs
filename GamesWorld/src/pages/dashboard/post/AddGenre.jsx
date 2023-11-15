import { useEffect, useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import Api from "../../../Api";
import swal from "sweetalert";
// import { Alert } from "bootstrap";

export default function AddGenre() {
  const [genre, setGenre] = useState("");
  const [posterPreview, setPosterPreview] = useState(null);
  const [gambar, setGambar] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // console.log(genre);
  //   console.log(posterPreview);

  // DELAY
  const AddGenreGame = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("kategori", genre);
    formData.append("gambar", gambar);

    Api.post("api/kategori/store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    swal("Success!", "Berhasil Tambah Genre!", "success");
    navigate("/admin/genregame");
  };

  //   Handle Image Change
  const gamePictureChange = (e) => {
    const file = e.target.files[0];
    setGambar(e.target.files[0]);
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPosterPreview(imageURL);
    } else {
      setPosterPreview(null);
    }
  };

  useEffect(() => {
    if (role) {
      navigate("/");
    }

    if (!token) {
      navigate("/admin");
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#1e1e2f" }} id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper  */}
      <div
        id="content-wrapper"
        className="d-flex flex-column"
        style={{ backgroundColor: "#1e1e2f" }}
      >
        {/* Main Content  */}
        <div id="content">
          {/* Topbar  */}
          <Topbar />

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-light">Add Genre</h1>
            </div>

            <form onSubmit={AddGenreGame} className="text-white">
              <hr className="mt-5" />
              {/* GENRE NAME */}
              <div className="row mb-4">
                <div className="col-md-4 form-group">
                  <label>Genre Name</label>
                  <input
                    type="text"
                    className="form-control text-white"
                    style={{ background: "#27293d" }}
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                  ></input>
                  <p>{genre}</p>
                </div>
                {/* IMAGE */}
                <div className="col form-group">
                  <label>Poster Image</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    onChange={gamePictureChange}
                    required
                  ></input>
                  {posterPreview && (
                    <div className="col-md-4 mt-3">
                      Poster Preview :
                      <img
                        src={posterPreview}
                        alt="Poster Preview"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* End Form About */}

              <hr />

              {/* <Link to='/admin/genregame'> */}
              <button
                type="submit"
                className="btn btn-outline-success my-2 mx-2"
              >
                Add
              </button>
              {/* </Link> */}

              <Link to="/admin/genregame">
                <button
                  type="button"
                  className="btn btn-outline-danger my-2 mx-2"
                >
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
        {/* End of Main Content  */}

        {/* Footer  */}
        <footer
          style={{ backgroundColor: "#1e1e2f" }}
          className="sticky-footer"
        >
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper  */}
    </div>
  );
}

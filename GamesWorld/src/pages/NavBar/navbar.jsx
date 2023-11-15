import { useEffect, useState } from "react";
import "./navbar.css";
import Api from "../../Api";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Navbar = () => {
  const [kategori, setKategori] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const fetchApi = async () => {
    await Api.get("/api/kategori").then((response) => {
      setKategori(response.data);
    });
  };

  const fetchData = async () => {
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await Api.get("/api/user").then((response) => {
      setUser(response.data.name);
    });
  };

  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    await axios.get("http://localhost:8000/api/user").then((response) => {
      //remove token from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("_grecaptcha");

      //redirect halaman login
      swal("Success!", "Berhasil Logout!", "success");
      navigate("/");
    });
  };

  useEffect(() => {
    fetchData();
    fetchApi();
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="ms-5 container-fluid">
          <div
            className="sidebar-brand-icon rotate-n-15"
            style={{ fontSize: "35px", color: "#4e73df" }}
          >
            <i className="fas fa-gamepad"></i>
          </div>
          <span
            href="#"
            className="ms-4 navbar-brand text-decoration-none"
            style={{ color: "#4e73df", fontSize: "23px" }}
          >
            GAMESWORLD
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-item collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "55px" }}>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link active text-decoration-none text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <Link to={`/allgame`} className="nav-link text-white">
                  All Games
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle text-decoration-none text-white"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    backgroundColor: " #041c3b ",
                    opacity: "0.9",
                    padding: "10px",
                  }}
                >
                  <span className="text-white" style={{ marginLeft: "15px" }}>
                    Game Categories
                  </span>
                  <hr className="text-white" />
                  {kategori.map((item, index) => (
                    <li key={index}>
                      <Link
                        style={{ color: "#0079CD" }}
                        onClick={() =>
                          (window.location.href = `/kategori/${item.idkategori}`)
                        }
                        className="dropdown-item"
                      >
                        {item.kategori}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                {token == null ? (
                  <div className="btn-group">
                    <a
                      href="/login"
                      className=" text-light text-decoration-none"
                      style={{
                        marginTop: "7px",
                        width: "100%",
                        cursor: "pointer",
                        marginLeft: "500px",
                      }}
                    >
                      Login
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>

              <ul className="navbar-nav ml-auto">
                {/* <div className="topbar-divider d-none d-sm-block"></div>  */}

                {/* Nav Item - User Information  */}
              </ul>
              {token ? (
                <li
                  className="nav-item dropdown "
                  style={{ marginLeft: "370px" }}
                >
                  <div className="col-1">
                    <a
                      style={{ marginLeft: "10px" }}
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user}
                    </a>

                    <ul
                      className="dropdown-menu"
                      style={{ backgroundColor: "#27293d" }}
                    >
                      <p className="text-white text-center">User Menu</p>
                      <hr className="text-white" />
                      <li>
                        <Link to={"/history"}>
                          <a
                            className="dropdown-item"
                            style={{ color: "#0079CD" }}
                          >
                            Comment Activity
                          </a>
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          style={{ color: "#0079CD" }}
                          onClick={logoutHanlder}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

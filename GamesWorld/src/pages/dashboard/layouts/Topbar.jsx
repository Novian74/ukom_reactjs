import img from "../../../../public/icon/undraw_profile.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function Topbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    await axios.get("http://localhost:8000/api/user").then((response) => {
      //remove token from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("_grecaptcha");

      //redirect halaman login
      swal("Success!", "Berhasil Logout!", "success");
      navigate("/admin");
    });
  };
  return (
    <nav
      style={{ backgroundColor: "#1e1e2f" }}
      className="navbar navbar-expand topbar mb-4 static-top shadow"
    >
      {/* Sidebar Toggle (Topbar)  */}

      <button
        className="btn btn-link d-md-none rounded-circle mr-3"
        data-toggle="collapse"
        type="button"
        data-target="#collapseExample"
        aria-expanded="true"
        aria-controls="collapseExample"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <i className="fa fa-bars"></i>
              </button> */}

      {/* Topbar Navbar  */}
      <ul className="navbar-nav ml-auto">
        {/* <div className="topbar-divider d-none d-sm-block"></div>  */}

        {/* Nav Item - User Information  */}

        <div className="btn-group">
          <a
            className="dropdown-toggle text-light dropdown-toggle"
            style={{
              width: "100%",
              marginRight: "30px",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
            }}
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Admin
          </a>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <button
                onClick={logoutHanlder}
                className="dropdown-item"
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        <li className="nav-item dropdown no-arrow">
          {/* <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-light font-weight-bold">
              Admin
            </span>
            <img className="img-profile rounded-circle" src={img} />
          </a> */}

          {/* Dropdown - User Information  */}
          {/* <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <div className="dropdown-divider"></div>
          </div> */}
        </li>
      </ul>
    </nav>
  );
}

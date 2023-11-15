// import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TopGame from "../post/TopGame";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TopGameLayout() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role) {
      navigate("/");
    }

    if (!token) {
      navigate("/admin");
    }
  }, []);
  return (
    <>
      {/* DASHBOARD LAYOUTING

      {/* Page Wrapper */}
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
            {/* End of Topbar  */}

            <TopGame />

            {/* {showDashboard && <Dashboard />}
            {showAddGame && <AddGame />}
            {showEditGame && <EditGame />}
            {showPost && (
              <GameList
                handleAddGameClick={handleAddGameClick}
                handleEditGameClick={handleEditGameClick}
              />
            )}
            {showCategories && <UserComment />}
            {showUsers && <Users />} */}
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
      {/* End of Page Wrapper  */}
    </>
  );
}

// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useEffect } from "react";
import Footer from "../../home/Footer";

export default function Index() {
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

            <Dashboard />

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
          <Footer />
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper  */}
      </div>
      {/* End of Page Wrapper  */}
    </>
  );
}

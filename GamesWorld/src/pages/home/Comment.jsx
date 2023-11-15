import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/navbar";
import Footer from "./Footer";
import Api from "../../Api";

export const Comment = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await Api.get("/api/user").then((response) => {
      const IdUser = response.data.id;
      Api.get(`/api/history/${IdUser}`).then((response) => {
        setData(response.data);
      });
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />
      <br />
      <br />
      <h5
        className="text-white ms-4 text-center"
        style={{ marginTop: "65px", fontSize: "25px" }}>
        Comment Activity
      </h5>

      {data.map((item, index) => (
        <div
          className="container"
          style={{
            border: "1px solid #0079CD",
            borderRadius: "1rem",
            marginTop: "20px",
          }}
          key={index}>
          <div className="text-white mt-2" style={{ fontSize: "15px" }}>
            <h5>Name : {item.name}</h5>
            <h6>Game : {item.nama_game}</h6>
            <p>Comment : {item.komen}</p>
            <p>
              {" "}
              Status :
              {item.upload === 1
                ? " Posted"
                : item.upload === 0
                ? " Filtering"
                : null}
            </p>
            <p>
              {" "}
              Type :
              {item.aksi === 0 ? " Real" : item.aksi === 1 ? " Reply" : null}
            </p>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "28rem" }}>
        <Footer />
      </div>
    </div>
  );
};

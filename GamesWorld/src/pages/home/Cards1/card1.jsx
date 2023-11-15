import "../Cards1/card1.css";

import { useState, useEffect } from "react";
import Api from "../../../Api";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    await Api.get("/api/game/card/2").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="row mt-5">
      <p className="title text-white">Newest</p>
      <Link
        to={`seeall/2`}
        className="text-white text-end"
        style={{ marginLeft: "-130px", marginTop: "-40px", marginLeft: '6px' }}
      >
        See All{" >"}
      </Link>
      {data.slice(0, 5).map((item, index) => (
        <div className="col-2" style={{ marginLeft: '22px' }} key={index}>
          <div
            style={{ backgroundColor: "#27293d" }}
            className="card cards text-white text-center"
          >
            <img src={item.gambar} alt="" className="game" />
            <div className="card-body">
              <h5 className="card-title">{item.nama_game}</h5>
              <p className="card-text">{item.kategori}</p>
              <Link
                to={`/detail/${item.idgame}`}
                className="btn"
                style={{ backgroundColor: "#4e73df" }}
              >
                Check
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

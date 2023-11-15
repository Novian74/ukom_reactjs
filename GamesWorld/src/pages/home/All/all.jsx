import { useEffect, useState } from "react";
import "./all.css";
import Api from "../../../Api";
import { Link } from "react-router-dom";

const All = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchApiAtas = async () => {
    await Api.get("/api/game/random/atas").then((response) => {
      setData1(response.data);
    });
  };

  const fetchApiBawah = async () => {
    await Api.get("/api/game/random/bawah").then((response) => {
      setData2(response.data);
    });
  };

  useEffect(() => {
    fetchApiAtas();
    fetchApiBawah();
  }, []);

  return (
    <div className="container body" style={{ marginTop: "60px" }}>
      <span className="cover">All Game</span>
      <Link
        to={`allgame`}
        className="text-white ms-4"
        style={{ marginTop: "-40px" }}
      >
        See All{" >"}
      </Link>
      <div className="row">
        {data1.map((item, index) => (
          <div className="col-6 mt-2" key={index}>
            <a
              href={`/detail/${item.idgame}`}
              className="text-white text-decoration-none"
            >
              <img
                src={item.gambar}
                alt="Gambar Game"
                style={{ width: "544px", height: "300px" }}
                className="rounded"
              />
              <h5 className="ms-3 mt-3">{item.nama}</h5>
              <p className="ms-3">{item.kategori}</p>
            </a>
          </div>
        ))}
      </div>
      <hr className="text-white" />
      <div className="row mt-2">
        {data2.map((item, index) => (
          <div key={index} className="col-2">
            <a
              href={`/detail/${item.idgame}`}
              className="text-white text-decoration-none"
            >
              <img
                src={item.gambar}
                alt="Gambar Game"
                className="rounded"
                style={{ height: "90px", width: "150px" }}
              />
              <p className="teks">{item.nama}</p>
              <p className="descr">{item.kategori}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;

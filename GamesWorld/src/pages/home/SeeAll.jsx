import { useState, useEffect } from "react";
import Api from "../../Api";
import Navbar from "../NavBar/navbar";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const SeeAll = () => {
  const id = useParams();
  const [game, setGame] = useState([]);
  let judul;

  if (id.id === "1") {
    judul = "RECOMENDED";
  } else if (id.id === "2") {
    judul = "NEWEST";
  } else if (id.id === "3") {
    judul = "INDONESIAN";
  }

  const fetchApiGame = async () => {
    Api.get("/api/game/card/" + id.id).then((response) => {
      let game = response.data;
      setGame(game);
    });
  };

  useEffect(() => {
    fetchApiGame();
  }, []);

  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />

      <header className="d-flex justify-content-center mt-5">
        <h2 className="mt-5" style={{ color: "#4e73df" }}>
          {judul} GAMES
        </h2>
      </header>

      <div className="container mt-3">
        <div className="row ms-5">
          {game.map((item, index) => (
            <div className="col-2 ms-3 me-5 mt-3" key={index}>
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
      </div>

      <Footer />
    </div>
  );
};

export default SeeAll;

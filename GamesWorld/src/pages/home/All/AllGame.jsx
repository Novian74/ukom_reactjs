import { React, useState, useEffect } from "react";
import Navbar from "../../NavBar/navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Api from "../../../Api";

const AllGame = () => {
  const [game, setGame] = useState([]);

  const fetchApiGame = async () => {
    Api.get("/api/game").then((response) => {
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
          ALL GAMES
        </h2>
      </header>

      <div className="container mt-3">
        <div className="row ms-5">
          {game.map((item, index) => (
            <div className="col-2 ms-3 me-5 mt-3" key={index}>
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card cards text-white text-center">
                <img src={item.gambar} alt="" className="game" />
                <div className="card-body">
                  <h5 className="card-title">{item.nama_game}</h5>
                  <p className="card-text">{item.kategori}</p>
                  <Link
                    to={`/detail/${item.idgame}`}
                    className="btn"
                    style={{ backgroundColor: "#4e73df" }}>
                    Check
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {game != null ? (
        <div>
          <Footer />
        </div>
      ) : (
        <div style={{marginTop: '27rem'}}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AllGame;

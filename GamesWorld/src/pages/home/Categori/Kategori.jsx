import { useState, useEffect } from "react";
import Navbar from "../../NavBar/navbar";
import Footer from "../Footer";
import "./categori.css";
import Api from "../../../Api";
import { Link, useParams } from "react-router-dom";

const Kategori = () => {
  const id = useParams();

  const [cover, setCover] = useState("");
  const [kategori, setKategori] = useState("");
  const [game, setGame] = useState([]);
  const [caro1, setCaro1] = useState([]);
  const [caro2, setCaro2] = useState([]);
  // const [komen, setKomen] = useState([]);

  // console.log(komen);

  const fetchApiKategori = async () => {
    Api.get("/api/kategori/" + id.id).then((response) => {
      setKategori(response.data[0].kategori);
      setCover(response.data[0].gambar);
    });
  };

  const fetchApiGame = async () => {
    Api.get("/api/game/kategori/" + id.id).then((response) => {
      let game = response.data;
      setGame(game);
      setCaro1(game.slice(0, 4));
      setCaro2(game.slice(4, 8));
    });
  };

  // const fetchApiKomen = async() => {
  //   Api.get("/api/komen").then((response) => {
  //     setKomen(response.data)
  //   })
  // }

  useEffect(() => {
    fetchApiKategori();
    fetchApiGame();
    // fetchApiKomen()
  }, []);

  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />

      <header className="d-flex justify-content-center">
        <a href="/apexlegend">
          <img
            src={cover}
            style={{
              width: "1342px",
              height: "500px",
              marginTop: "70px",
              display: "cover",
            }}
            alt=""
          />
        </a>
      </header>
      <hr className="text-white" />
      <h2 className="text-white mt-2" style={{ marginLeft: "92px" }}>
        {kategori.toUpperCase()} GAMES
      </h2>

      {/* CARD CAROUSEL */}

      <div id="carouselExample" className="carousel slide mt-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* SLIDE 1 */}
            <div className="row d-flex justify-content-center">
              {caro1.map((item, index) => (
                <div className="col-2" key={index}>
                  <a
                    href={`/detail/${item.idgame}`}
                    className="text-white text-decoration-none"
                  >
                    <img src={item.gambar} alt="" className="lofer" />
                    <p className="teks">{item.nama_game}</p>
                    <p className="descr">{item.kategori}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            {/* SLIDE 2 */}

            <div className="row d-flex justify-content-center">
              {caro2.map((item, index) => (
                <div className="col-2" key={index}>
                  <a
                    href={`/detail/${item.idgame}`}
                    className="text-white text-decoration-none"
                  >
                    <img src={item.gambar} alt="" className="lofer" />
                    <p className="teks">{item.nama_game}</p>
                    <p className="descr">{item.deskripsi}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        {game.map((item, index) => (
          <div
            className="row mt-2 mx-auto"
            style={{
              border: "1px solid #27293d",
              backgroundColor: "#27293d",
              heigh: "100px",
              width: "1000px",
            }}
            key={index}
          >
            <div className="row">
              <div className="col-2">
                <div className="text-white">
                  <img
                    src={item.gambar}
                    alt=""
                    style={{
                      width: "150px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      height: "110px",
                    }}
                  />
                </div>
              </div>
              <div className="col-8 text-white ms-3">
                <span style={{ fontSize: "20px" }}>{item.nama_game}</span>
                <p style={{ fontSize: "11px" }}>{item.kategori}</p>
                <p style={{ fontSize: "13px", marginTop: "-12px" }}>
                  {item.tanggal}
                </p>
                <p style={{ fontSize: "12px", marginTop: "30px" }}>
                  {/* <span style={{ color: "#1BAA05" }}>POSITIFE </span> | {komen.length}Comment */}
                </p>
              </div>
              <div className="col">
                <Link
                  to={`/detail/${item.idgame}`}
                  className={"btn mt-5"}
                  style={{ backgroundColor: "#4e73df", marginLeft: "47px" }}
                >
                  CHECK
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Kategori;

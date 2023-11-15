import { useState, useEffect } from "react";
import Navbar from "../../NavBar/navbar";
import "./Detail.css";
import Footer from "../Footer";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../../Api";
// import Test from "../Test";
import Reply from "./Reply";
import swal from "sweetalert";

const Detail = () => {
  const id = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [master, setMaster] = useState("");
  const [gambar1, setGambar1] = useState("");
  const [gambar2, setGambar2] = useState("");
  const [gambar3, setGambar3] = useState("");
  const [about, setAbout] = useState([]);
  const [tanggal, setTanggal] = useState(new Date());
  const [iduser, setIdUser] = useState("");
  const [nama, setNama] = useState("");
  const [rate, setRate] = useState("");
  const [komeni, setKomeni] = useState("");
  const [jumlahKomen, setJumlahKomen] = useState("");
  const [jumlahRate, setJumlahRate] = useState("");
  const [komen, setKomen] = useState([]);
  const [openedCommentId, setOpenedCommentId] = useState(null);
  const [game, setGame] = useState([]);
  const [otherGameCaro1, setOtherGameCaro1] = useState([]);
  const [otherGameCaro2, setOtherGameCaro2] = useState([]);

  // console.log(jumlahKomen);
  // console.log(jumlahRate);

  if (token) {
    const fetchData = async () => {
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await Api.get("/api/user").then((response) => {
        setIdUser(response.data.id);
        setNama(response.data.name);
      });
    };
    fetchData();
  }

  const fetchJumlahKomen = async () => {
    await Api.get(`/api/komen/hitung/${id.id}`).then((response) => {
      setJumlahKomen(response.data);
    });
  };

  const fetchJumlahRate = async () => {
    await Api.get(`/api/komen/rate/${id.id}`).then((response) => {
      setJumlahRate(response.data);
    });
  };

  const fetchApi = async () => {
    await Api.get(`/api/game/` + id.id).then((response) => {
      setMaster(response.data);
    });
  };

  const fetchApiCaro = async () => {
    await Api.get(`/api/gambar/` + id.id).then((response) => {
      let caro = response.data;
      caro.map((item) => {
        setGambar1(item.game_preview1);
        setGambar2(item.game_preview2);
        setGambar3(item.game_preview3);
      });
    });
  };

  const fetchApiAbout = async () => {
    await Api.get(`/api/about/` + id.id).then((response) => {
      setAbout(response.data);
    });
  };

  const fetchApiGame = async () => {
    await Api.get(`/api/game/`).then((response) => {
      setGame(response.data);
      setOtherGameCaro1(response.data.slice(0, 4));
      setOtherGameCaro2(response.data.slice(4, 8));
    });
  };

  const fetchApiKomen = async () => {
    await Api.get(`/api/komen/` + id.id).then((response) => {
      setKomen(response.data);
    });
  };

  const addKomen = async (e) => {
    e.preventDefault();

    if (token) {
      const newRandomNumber = Math.floor(10000 + Math.random() * 90000);

      const formattedDate = `${tanggal.getDate()}-${
        tanggal.getMonth() + 1
      }-${tanggal.getFullYear()}`;

      const formData = new FormData();
      formData.append("idkomen", newRandomNumber);
      formData.append("idgame", id.id);
      formData.append("tanggal", formattedDate);
      formData.append("iduser", iduser);
      formData.append("rate", rate);
      formData.append("komen", komeni);
      formData.append("aksi", "0");
      formData.append("upload", "0");

      await Api.post("/api/komen/store", formData).then(() => {
        swal("Good job!", "Comment Post!", "success");
        navigate("/detail/" + id.id);
      });
    } else {
      navigate("/login");
      swal("Must Login!", "You cannot comment before login!", "error");
    }
  };

  const handleShowReply = (idkomen) => {
    setOpenedCommentId(idkomen);
  };

  const akumulasi = jumlahRate / jumlahKomen;
  const angkaDipangkas = akumulasi.toFixed(1);
  // console.log(angkaDipangkas);

  useEffect(() => {
    fetchApi();
    fetchApiCaro();
    fetchApiAbout();
    fetchApiGame();
    fetchApiKomen();
    fetchJumlahKomen();
    fetchJumlahRate();
  }, []);
  return (
    // TAMPILAN AWAL CHECK

    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />
      <br />
      <div className="container mt-5">
        <div className="d-flex justify-content-center mt-4 row">
          <div className="row" style={{ marginTop: "10px" }}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    style={{ textDecoration: "none", color: "#4e73df" }}
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  {master.nama_game}
                </li>
              </ol>
            </nav>
            <div className="col-lg-2" style={{}}>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                style={{
                  height: "424px",
                  width: "650px",
                }}
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={gambar1}
                      className="d-block"
                      width={"650px"}
                      height={"424px"}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={gambar2}
                      className="d-block"
                      width={"650px"}
                      height={"424px"}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={gambar3}
                      className="d-block"
                      width={"650px"}
                      height={"424px"}
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-2" style={{ marginLeft: "30rem" }}>
              <div
                className="card"
                style={{
                  width: "27rem",
                  backgroundColor: "#27293d",
                }}
              >
                <div className="row">
                  <div className="col">
                    <img
                      src={master.gambar}
                      alt=""
                      style={{
                        width: "230px",
                        height: "150px",
                        marginLeft: "14px",
                        marginRight: "-10px",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <div className="col mt-2">
                    <p className="text-white" style={{ fontSize: "12px" }}>
                      Release Date{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-14px",
                        color: "#036baa",
                      }}
                    >
                      {master.tanggal}
                    </p>
                    <p
                      className="text-white"
                      style={{ fontSize: "12px", marginTop: "-14px" }}
                    >
                      Genre Games{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-14px",
                        color: "#036baa",
                      }}
                    >
                      {master.kategori}
                    </p>
                    <p
                      className="text-white"
                      style={{ fontSize: "12px", marginTop: "-14px" }}
                    >
                      Games Rate{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "30px",
                        marginTop: "-20px",
                        color: "#036baa",
                      }}
                    >
                      {isNaN(angkaDipangkas) ? (
                        <div style={{ fontSize: "20px" }}>No Rate</div>
                      ) : (
                        `${angkaDipangkas}/5 `
                      )}
                    </p>
                  </div>
                </div>
                <hr className="text-white" />
                <div className="card-body text-white">
                  <h5
                    className="card-title"
                    style={{
                      marginTop: "-12px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {master.nama_game}
                  </h5>
                  <p className="card-text">{master.deskripsi}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white mt-3" />
          {/* BAGIAN ABOUT GAME */}
          <h3 className="text-white mt-1">ABOUT THIS GAME</h3>
          {about.map((item, index) => (
            <div className="row mt-4" key={index}>
              {index === 0 || index === 2 ? (
                <>
                  <div className="col">
                    <span>
                      <h5 style={{ color: "#4e73df" }}>{item.judul}</h5>
                    </span>
                    <span>
                      <h3 className="text-white">{item.penjelasan}</h3>
                    </span>
                    <p className="text-white">{item.info}</p>
                  </div>
                  <div className="col" style={{ marginBottom: "-80px" }}>
                    <img
                      src={item.gambar}
                      alt=""
                      style={{ width: "500px", height: "300px" }}
                    />
                  </div>
                </>
              ) : null}

              {index === 1 || index === 3 ? (
                <>
                  <div className="col" style={{ marginTop: "150px" }}>
                    <img
                      src={item.gambar}
                      alt=""
                      style={{ width: "500px", height: "300px" }}
                    />
                  </div>
                  <div className="col" style={{ marginTop: "150px" }}>
                    <span>
                      <h5 style={{ color: "#4e73df" }}>{item.judul}</h5>
                    </span>
                    <span>
                      <h3 className="text-white">{item.penjelasan}</h3>
                    </span>
                    <p className="text-white">{item.info}</p>
                  </div>
                </>
              ) : null}
            </div>
          ))}
          {/* BAGIAN SPESIFIKASI */}
          <hr className="text-white mt-5" />
          <div className="row ms-auto">
            <h3 className="text-white mt-3">SYSTEM REQUIREMENT</h3>
            <div className="col">
              <h4 className="text-white mt-3">Minimum Specification :</h4>
              <p className="text-white">CPU : {master.min_cpu}</p>
              <p className="text-white">GPU : {master.min_gpu}</p>
              <p className="text-white">RAM : {master.min_ram}</p>
              <p className="text-white">Storage : {master.min_storage}</p>
            </div>
            <div className="col">
              <h4 className="text-white mt-3">Recomended Specification :</h4>
              <p className="text-white">CPU : {master.rec_cpu}</p>
              <p className="text-white">GPU : {master.rec_gpu}</p>
              <p className="text-white">RAM : {master.rec_ram}</p>
              <p className="text-white">Storage : {master.rec_storage}</p>
            </div>
          </div>
          {/* BAGIAN DOWNLOAD */}
          <hr className="text-white mt-4" />
          <div className="container">
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div
                className="col-5 ms-3"
                style={{
                  border: "1px solid grey",
                  borderRadius: "1rem",
                  marginTop: "20px",
                }}
              >
                <h5 className="text-white">
                  LINK DOWNLOAD FOR {master.nama_game} HERE
                </h5>
                <a className="text-decoration-none" href={master.url}>
                  Click This Site
                </a>
              </div>
              <div
                className="col-5"
                style={{
                  marginLeft: "140px",
                  border: "1px solid grey",
                  borderRadius: "1rem",
                  marginTop: "20px",
                }}
              >
                <h5 className="text-white">
                  CHECK MORE INFO {master.nama_game} IN HERE
                </h5>
                <a className="text-decoration-none" href={master.urlM}>
                  Click This Site
                </a>
              </div>
            </div>
          </div>
          {/* OTHER GAMES */}
          <hr className="text-white mt-3" />
          <h3 className="text-white">Other Games</h3>
          <div id="carouselExample" className="carousel slide mt-5">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* SLIDE 1 */}
                <div className="row d-flex justify-content-center">
                  {otherGameCaro1.map((item, index) => (
                    <div className="col-2 me-4" key={index}>
                      <a
                        href={`/detail/${item.idgame}`}
                        className="text-white text-decoration-none"
                      >
                        <img src={item.gambar} alt="" className="lofer w-2" />
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
                  {otherGameCaro2.map((item, index) => (
                    <div className="col-2 me-4" key={index}>
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
          {/* FORM COMMENT */}
          <hr className="text-white mt-3" />
          <h3 className="text-white mt-1">Comments Section</h3>
          <form className="text-white mt-2" onSubmit={addKomen}>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text"> Name :</span>
                <input
                  type="text"
                  value={nama}
                  className="form-control text-white"
                  onChange={(e) => setNama(e.target.value)}
                  style={{ background: "#27293d" }}
                />
                <span className="input-group-text"> Rate :</span>
                <select
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                >
                  <option disabled value="">
                    Choose Rate
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Comment :
              </label>
              <textarea
                value={komeni}
                className="form-control text-white"
                onChange={(e) => setKomeni(e.target.value)}
                style={{ background: "#27293d" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#4e73df" }}
            >
              Submit
            </button>
          </form>
          {/* ORANG YANG COMMENT */}
          {komen.map((item, index) => (
            <div
              className="card text-white mt-3"
              style={{ backgroundColor: "#27293d" }}
              key={index}
            >
              {/* <hr className="text-white" /> */}
              <h5 className=" mt-3">{item.name}</h5>
              <p>
                Rating : <b>{item.rate} </b>
              </p>
              <p>{item.komen}</p>
              <button
                type="button"
                onClick={() => handleShowReply(item.idkomen)}
                className="text-white btn btn-outline-primary col-2 mb-3"
                style={{ cursor: "pointer" }}
              >
                View Reply{""}
              </button>
              {openedCommentId === item.idkomen && (
                <>
                  <Reply idkomen={item.idkomen} idgame={id.id} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;

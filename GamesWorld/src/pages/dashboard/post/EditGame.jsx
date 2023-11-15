import { useEffect, useState } from "react";
// import axios, { Axios } from "axios";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api from "../../../Api";
import swal from "sweetalert";

export default function EditGame() {
  const id = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [kategori, setKategori] = useState([]);
  // === MAIN STATE ===
  const [gameID, setGameID] = useState("");
  const [gameName, setGameName] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [gameRelease, setGameRelease] = useState("");
  const [gameUrl, setGameUrl] = useState("");
  const [gameUrlM, setGameUrlM] = useState("");
  const [gameDesc, setGameDesc] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameStatus, setGameStatus] = useState("");

  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");

  // === ABOUT GAME STATE ===
  const [idAbout1, setIdAbout1] = useState("");
  const [title1, setTitle1] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [image1, setImage1] = useState("");
  const [description1, setDescription1] = useState("");

  const [idAbout2, setIdAbout2] = useState("");
  const [title2, setTitle2] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [image2, setImage2] = useState("");
  const [description2, setDescription2] = useState("");

  const [idAbout3, setIdAbout3] = useState("");
  const [title3, setTitle3] = useState("");
  const [subtitle3, setSubtitle3] = useState("");
  const [image3, setImage3] = useState("");
  const [description3, setDescription3] = useState("");

  const [idAbout4, setIdAbout4] = useState("");
  const [title4, setTitle4] = useState("");
  const [subtitle4, setSubtitle4] = useState("");
  const [image4, setImage4] = useState("");
  const [description4, setDescription4] = useState("");

  // === SPESIFICATION  ===
  // Minimum
  const [minCPU, setMinCPU] = useState("");
  const [minGPU, setMinGPU] = useState("");
  const [minRAM, setMinRAM] = useState("");
  const [minHARDISK, setMinHARDISK] = useState("");

  // Recomended
  const [recomCPU, setRecomCPU] = useState("");
  const [recomGPU, setRecomGPU] = useState("");
  const [recomRAM, setRecomRAM] = useState("");
  const [recomHARDISK, setRecomHARDISK] = useState("");

  const fetchApi = async () => {
    await Api.get(`/api/game/` + id.id).then((response) => {
      setGameName(response.data.nama_game);
      setGameCategory(response.data.idkategori);
      setGameRelease(response.data.tanggal);
      setGameUrl(response.data.url);
      setGameUrlM(response.data.urlM);
      setGameDesc(response.data.deskripsi);
      setGameStatus(response.data.status);
      setGameCategory(response.data.idkategori);
      setMinCPU(response.data.min_cpu);
      setMinGPU(response.data.min_gpu);
      setMinRAM(response.data.min_ram);
      setMinHARDISK(response.data.min_storage);
      setRecomCPU(response.data.rec_cpu);
      setRecomGPU(response.data.rec_gpu);
      setRecomRAM(response.data.rec_ram);
      setRecomHARDISK(response.data.rec_storage);
    });
  };

  const fetchApiAbout = async () => {
    await Api.get(`/api/about/` + id.id).then((response) => {
      setIdAbout1(response.data[0].id);
      setTitle1(response.data[0].judul);
      setSubtitle1(response.data[0].penjelasan);
      setDescription1(response.data[0].info);
      setIdAbout2(response.data[1].id);
      setTitle2(response.data[1].judul);
      setSubtitle2(response.data[1].penjelasan);
      setDescription2(response.data[1].info);
      setIdAbout3(response.data[2].id);
      setTitle3(response.data[2].judul);
      setSubtitle3(response.data[2].penjelasan);
      setDescription3(response.data[2].info);
      setIdAbout4(response.data[3].id);
      setTitle4(response.data[3].judul);
      setSubtitle4(response.data[3].penjelasan);
      setDescription4(response.data[3].info);
    });
  };

  const fetchApiKategori = async () => {
    Api.get("/api/kategori").then((response) => {
      setKategori(response.data);
    });
  };

  const EditGame = async (e) => {
    e.preventDefault();

    const game = new FormData();
    game.append("idgame", gameID);
    game.append("tanggal", gameRelease);
    game.append("nama_game", gameName);
    game.append("gambar", gameImage); // gameImageFile adalah objek File yang berisi gambar
    game.append("url", gameUrl);
    game.append("urlM", gameUrlM);
    game.append("deskripsi", gameDesc);
    game.append("idkategori", gameCategory);
    game.append("status", gameStatus);
    game.append("min_cpu", minCPU);
    game.append("min_gpu", minGPU);
    game.append("min_ram", minRAM);
    game.append("min_storage", minHARDISK);
    game.append("rec_cpu", recomCPU);
    game.append("rec_gpu", recomGPU);
    game.append("rec_ram", recomRAM);
    game.append("rec_storage", recomHARDISK);
    game.append("_method", "PUT");

    const preview = new FormData();
    preview.append("game_preview1", preview1);
    preview.append("game_preview2", preview2);
    preview.append("game_preview3", preview3);
    preview.append("_method", "PUT");

    const about1 = new FormData();
    about1.append("idgame", gameID);
    about1.append("gambar", image1);
    about1.append("judul", title1);
    about1.append("penjelasan", subtitle1);
    about1.append("info", description1);
    about1.append("_method", "PUT");

    const about2 = new FormData();
    about2.append("idgame", gameID);
    about2.append("gambar", image2);
    about2.append("judul", title2);
    about2.append("penjelasan", subtitle2);
    about2.append("info", description2);
    about2.append("_method", "PUT");

    const about3 = new FormData();
    about3.append("idgame", gameID);
    about3.append("gambar", image3);
    about3.append("judul", title3);
    about3.append("penjelasan", subtitle3);
    about3.append("info", description3);
    about3.append("_method", "PUT");

    const about4 = new FormData();
    about4.append("idgame", gameID);
    about4.append("gambar", image4);
    about4.append("judul", title4);
    about4.append("penjelasan", subtitle4);
    about4.append("info", description4);
    about4.append("_method", "PUT");

    // const responseGame = await Api.post("/api/game/store", game, {
    //   headers: {
    //     "Content-Type": "multipart/form-data", // Atur header Content-Type
    //   },
    // });

    // const responsePreview = await Api.post("/api/gamepreview/store", preview, {
    //   headers: {
    //     "Content-Type": "multipart/form-data", // Atur header Content-Type
    //   },
    // });

    const axiosRequests = [];

    axiosRequests.push(
      Api.post("api/game/update/" + id.id, game, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      Api.post("api/game/gambar/update/" + id.id, preview, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      Api.post("api/game/about/update/" + idAbout1, about1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      Api.post("api/game/about/update/" + idAbout2, about2, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      Api.post("api/game/about/update/" + idAbout3, about3, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      Api.post("api/game/about/update/" + idAbout4, about4, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    );

    Promise.all(axiosRequests).then(() => {
      swal("Success!", "Berhasil Update Game!", "success");
      navigate("/admin/gamelist");
    });
  };

  useEffect(() => {
    if (role) {
      navigate("/");
    }

    if (!token) {
      navigate("/admin");
    } else {
      fetchApi();
      fetchApiKategori();
      fetchApiAbout();
    }
  }, []);

  return (
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

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-light">Edit Game</h1>
            </div>
            <form
              onSubmit={EditGame}
              encType="multipart/form-data"
              className="text-white"
            >
              <input type="text" value={gameID} hidden />
              {/* Input Game Name */}
              <div className="form-group">
                <label>Game Name :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                ></input>
              </div>

              {/* Input Game Category */}
              <div className="form-group">
                <label>Game Category :</label>
                <select
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameCategory}
                  onChange={(e) => setGameCategory(e.target.value)}
                >
                  <option value="" className="text-white" disabled>
                    Choose Category
                  </option>
                  {kategori.map((item, index) => (
                    <option
                      key={index}
                      className="text-white"
                      value={item.idkategori}
                    >
                      {item.kategori}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Game Sort :</label>
                <select
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameStatus}
                  onChange={(e) => setGameStatus(e.target.value)}
                >
                  <option value="0">Nothing</option>
                  <option value="1">Recomended Games</option>
                  <option value="2">Newest Games</option>
                  <option value="3">Indonesian Games</option>
                </select>
              </div>

              {/* Input Game Release */}
              <div className="form-group mt-2">
                <label>Game Release :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameRelease}
                  onChange={(e) => setGameRelease(e.target.value)}
                ></input>
              </div>
              {/* Input Game Url */}
              <div className="form-group mt-2">
                <label>Game Url Download :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameUrl}
                  onChange={(e) => setGameUrl(e.target.value)}
                ></input>
              </div>
              {/* Input Game Url Info */}
              <div className="form-group mt-2">
                <label>Game Url More Info :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameUrlM}
                  onChange={(e) => setGameUrlM(e.target.value)}
                ></input>
              </div>
              {/* Input Game Description */}
              <div className="form-group">
                <label>Game Desc :</label>
                <textarea
                  className="form-control text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ background: "#27293d" }}
                  value={gameDesc}
                  onChange={(e) => setGameDesc(e.target.value)}
                ></textarea>
              </div>

              {/* Upload File */}
              <div className="form-group">
                <label>Game Picture :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white"
                  onChange={(e) => setGameImage(e.target.files[0])}
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div className="form-group">
                <label>Game Preview :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white "
                  onChange={(e) => setPreview1(e.target.files[0])}
                  style={{ background: "#27293d" }}
                ></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white mt-3"
                  onChange={(e) => setPreview2(e.target.files[0])}
                  style={{ background: "#27293d" }}
                ></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white mt-3"
                  onChange={(e) => setPreview3(e.target.files[0])}
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div>
                {/* Akan ditampilkan ketika admin setelah upload gambar */}
                {/* <div className="row">
                  <div className="col-md-3">Preview 1</div>
                  <div className="col-md-3">Preview 2</div>
                  <div className="col-md-3">Preview 3</div>
                  <div className="col-md-3">Preview 4</div>
                </div> */}
              </div>

              <hr className="mt-5" />

              {/* FORM ABOUT */}

              {/* About 1 */}
              <h4 className="mb-5">ABOUT GAME</h4>
              <div className="row mb-2">
                <div className="col-md-4 form-group">
                  <label>Title 1</label>
                  <input
                    type="text"
                    className="form-control text-white"
                    style={{ background: "#27293d" }}
                    value={title1}
                    onChange={(e) => setTitle1(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 1</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle1}
                    onChange={(e) => setSubtitle1(e.target.value)}
                  ></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 1</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    onChange={(e) => setImage1(e.target.files[0])}
                    style={{ background: "#27293d" }}
                  ></input>
                </div>

                <div className="col-md-8 form-group">
                  <label>Deskripsi 1</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description1}
                    onChange={(e) => setDescription1(e.target.value)}
                  ></textarea>
                </div>
                {/* <div className="row">
                  jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload
                  <div className="col-md-4">Preview : </div>
                </div> */}
              </div>
              {/* About 2 */}
              <div className="row mb-2">
                <div className="col-md-4 form-group">
                  <label>Title 2</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title2}
                    onChange={(e) => setTitle2(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 2</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle2}
                    onChange={(e) => setSubtitle2(e.target.value)}
                  ></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 2</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    onChange={(e) => setImage2(e.target.files[0])}
                    style={{ background: "#27293d" }}
                  ></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 2</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description2}
                    onChange={(e) => setDescription2(e.target.value)}
                  ></textarea>
                </div>
                {/* <div className="row">
                  jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload
                  <div className="col-md-4">Preview : </div>
                </div> */}
              </div>
              {/* About 3 */}
              <div className="row mb-2">
                <div className="col-md-4 form-group">
                  <label>Title 3</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title3}
                    onChange={(e) => setTitle3(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 3</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle3}
                    onChange={(e) => setSubtitle3(e.target.value)}
                  ></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 3</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    onChange={(e) => setImage3(e.target.files[0])}
                    style={{ background: "#27293d" }}
                  ></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 3</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description3}
                    onChange={(e) => setDescription3(e.target.value)}
                  ></textarea>
                </div>
                {/* <div className="row">
                  jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload
                  <div className="col-md-4">Preview : </div>
                </div> */}
              </div>

              {/* About 4 */}
              <div className="row mb-2">
                <div className="col-md-4 form-group">
                  <label>Title 4</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title4}
                    onChange={(e) => setTitle4(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 4</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle4}
                    onChange={(e) => setSubtitle4(e.target.value)}
                  ></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 4</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    onChange={(e) => setImage4(e.target.files[0])}
                    style={{ background: "#27293d" }}
                  ></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 4</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description4}
                    onChange={(e) => setDescription4(e.target.value)}
                  ></textarea>
                </div>
                {/* <div className="row">
                  jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload
                  <div className="col-md-4">Preview : </div>
                </div> */}
              </div>
              {/* End Form About */}

              <hr />

              {/* SPESIFICATION */}

              {/* Minimum Spesification */}
              <div className="form-group">
                <h4>Minimum Specification :</h4>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      CPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                      value={minCPU}
                      onChange={(e) => setMinCPU(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      GPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                      value={minGPU}
                      onChange={(e) => setMinGPU(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      RAM :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                      value={minRAM}
                      onChange={(e) => setMinRAM(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      Hardisk :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                      value={minHARDISK}
                      onChange={(e) => setMinHARDISK(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* Recomendation Spesification */}
              <div className="form-group">
                <h4>Recomended Specification :</h4>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      CPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                      value={recomCPU}
                      onChange={(e) => setRecomCPU(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      GPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                      value={recomGPU}
                      onChange={(e) => setRecomGPU(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      RAM :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                      value={recomRAM}
                      onChange={(e) => setRecomRAM(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="leftInput" className="col-form-label">
                      Hardisk :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                      value={recomHARDISK}
                      onChange={(e) => setRecomHARDISK(e.target.value)}
                    />
                  </div>
                </div>
                <hr />
              </div>

              <button
                type="submit"
                className="btn btn-outline-success my-2 mx-2"
              >
                Edit
              </button>

              <Link to="/admin/gamelist">
                <button
                  type="button"
                  className="btn btn-outline-danger my-2 mx-2"
                >
                  Cancel
                </button>
              </Link>
            </form>
          </div>

          {/* {showDashboard && <Dashboard />}
            {showEditGame && <EditGame />}
            {showEditGame && <EditGame />}
            {showPost && (
              <GameList
                handleEditGameClick={handleEditGameClick}
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
  );
}

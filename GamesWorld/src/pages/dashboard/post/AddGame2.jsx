import { useState } from "react";
import axios from "axios";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { Link } from "react-router-dom";

export default function AddGame() {
  // === MAIN STATE ===
  const [gameName, setGameName] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [gameRelease, setGameRelease] = useState("");
  const [gameDesc, setGameDesc] = useState("");

  // === ABOUT GAME STATE ===
  const [title1, setTitle1] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  // const [image1, setImage1] = useState()
  const [description1, setDescription1] = useState("");

  const [title2, setTitle2] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  // const [image2, setImage2] = useState()
  const [description2, setDescription2] = useState("");

  const [title3, setTitle3] = useState("");
  const [subtitle3, setSubtitle3] = useState("");
  // const [image3, setImage3] = useState()
  const [description3, setDescription3] = useState("");

  const [title4, setTitle4] = useState("");
  const [subtitle4, setSubtitle4] = useState("");
  // const [image4, setImage4] = useState()
  const [description4, setDescription4] = useState("");

  // === SPESIFICATION  ===
  // Minimum
  const [minCPU, setMinCPU] = useState("");
  const [minGPU, setMinGPU] = useState("");
  const [minRAM, setMinRAM] = useState("");
  const [minHARDISK, setMinHARDISK] = useState("");
  const [minOS, setMinOS] = useState("");

  // Recomended
  const [recomCPU, setRecomCPU] = useState("");
  const [recomGPU, setRecomGPU] = useState("");
  const [recomRAM, setRecomRAM] = useState("");
  const [recomHARDISK, setRecomHARDISK] = useState("");
  const [recomOS, setRecomOS] = useState("");

  // === CONSOLE LOG ===

  // console.log(gameName)
  // console.log(gameCategory)
  // console.log(gameRelease)
  // console.log(gameDesc)

  // console.log(title1);
  // console.log(subtitle1);
  // console.log(description1);
  // console.log(title2);
  // console.log(subtitle2);
  // console.log(description2);
  // console.log(title3);
  // console.log(subtitle3);
  // console.log(description3);
  // console.log(title4);
  // console.log(subtitle4);
  // console.log(description4);

  // console.log(minCPU);
  // console.log(minGPU);
  // console.log(minRAM);
  // console.log(minHARDISK);
  // console.log(minOS);

  // console.log(recomCPU);
  // console.log(recomGPU);
  // console.log(recomRAM);
  // console.log(recomHARDISK);
  // console.log(recomOS);

  const [gamePicture, setGamePicture] = useState(null);
  const [imagePreview1, setImagePreview1] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [imagePreview3, setImagePreview3] = useState(null);

  // === HANDLE GAME PREVIEW ==
  // Handle Game Picture OnChange
  const gamePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGamePicture(imageUrl);
    } else {
      setGamePicture(null);
    }
  };
  // Handle Preview1 OnChange
  const gamePreviewChange1 = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview1(imageUrl);
    } else {
      setImagePreview1(null);
    }
  };
  // Handle Preview2 OnChange
  const gamePreviewChange2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview2(imageUrl);
    } else {
      setImagePreview2(null);
    }
  };
  // Handle Preview2 OnChange
  const gamePreviewChange3 = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview3(imageUrl);
    } else {
      setImagePreview3(null);
    }
  };

  // delay
  const AddGame = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/game", {
        nama_game: gameName,
        tanggal: gameRelease,
        deskripsi: gameDesc,
      });
      // post success
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#1e1e2f" }} id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper  */}
      <div
        id="content-wrapper"
        className="d-flex flex-column"
        style={{ backgroundColor: "#1e1e2f" }}>
        {/* Main Content  */}
        <div id="content">
          {/* Topbar  */}
          <Topbar />
          {/* End of Topbar  */}

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-light">Add Game</h1>
            </div>
            <div className="col"></div>
            <form onSubmit={AddGame} className="text-white">
              {/* Input Game Name */}
              <div className="form-group">
                <label>Game Name :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}></input>
              </div>

              {/* Input Game Category */}
              <div className="form-group">
                <label>Game Category : -DROPDOWN-</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                  value={gameCategory}
                  onChange={(e) => setGameCategory(e.target.value)}></input>
              </div>
              {/* Input Game Release */}
              <div className="form-group">
                <label>Game Release :</label>
                <input
                  type="text"
                  className="form-control text-white"
                  style={{ background: "#27293d" }}
                  value={gameRelease}
                  onChange={(e) => setGameRelease(e.target.value)}></input>
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
                  onChange={(e) => setGameDesc(e.target.value)}></textarea>
              </div>

              {/* === Upload File ===*/}

              {/* Main Picture */}
              <div className="form-group">
                <label>Game Picture :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={gamePictureChange}
                  className="form-control text-white"
                  style={{ background: "#27293d" }}></input>
              </div>

              {/* === FORM Game Sub Preview ===*/}
              <div className="form-group">
                <label>Game Preview :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={gamePreviewChange1}
                  className="form-control text-white"
                  style={{ background: "#27293d" }}></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={gamePreviewChange2}
                  className="form-control text-white mt-3"
                  style={{ background: "#27293d" }}></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={gamePreviewChange3}
                  className="form-control text-white mt-3"
                  style={{ background: "#27293d" }}></input>
              </div>

              {/*  === PREVIEW GAMBAR ===  */}
              <div>
                {/*Akan ditampilkan ketika admin setelah upload gambar */}
                <div className="row">
                  <div className="col-md-3">
                    {gamePicture && (
                      <div>
                        Preview 1 - Main Picture
                        <img
                          src={gamePicture}
                          alt="Image Preview"
                          style={{ maxWidth: "100%", maxHeight: "200px" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-md-3">
                    {imagePreview1 && (
                      <div>
                        Preview 2
                        <img
                          src={imagePreview1}
                          alt="Image Preview"
                          style={{ maxWidth: "100%", maxHeight: "200px" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-md-3">
                    {imagePreview2 && (
                      <div>
                        Preview 3
                        <img
                          src={imagePreview2}
                          alt="Image Preview"
                          style={{ maxWidth: "100%", maxHeight: "200px" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-md-3">
                    {imagePreview3 && (
                      <div>
                        Preview 4
                        <img
                          src={imagePreview3}
                          alt="Image Preview"
                          style={{ maxWidth: "100%", maxHeight: "200px" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="mt-5" />

              {/* FORM ABOUT */}

              {/* About 1 */}
              <h4 className="mb-5">ABOUT GAME</h4>
              <div className="row mb-4">
                <div className="col-md-4 form-group">
                  <label>Title1</label>
                  <input
                    type="text"
                    className="form-control text-white"
                    style={{ background: "#27293d" }}
                    value={title1}
                    onChange={(e) => setTitle1(e.target.value)}></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle1</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle1}
                    onChange={(e) => setSubtitle1(e.target.value)}></input>
                </div>
                <div className="col form-group">
                  <label>Gambar1</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}></input>
                </div>

                <div className="col-md-8 form-group">
                  <label>Deskripsi1</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description1}
                    onChange={(e) =>
                      setDescription1(e.target.value)
                    }></textarea>
                </div>
                <div className="row">
                  {/* jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload*/}
                  <div className="col-md-4">Preview : </div>
                </div>
              </div>
              {/* About 2 */}
              <div className="row mb-5">
                <div className="col-md-4 form-group">
                  <label>Title 2</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title2}
                    onChange={(e) => setTitle2(e.target.value)}></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 2</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle2}
                    onChange={(e) => setSubtitle2(e.target.value)}></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 2</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 2</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description2}
                    onChange={(e) =>
                      setDescription2(e.target.value)
                    }></textarea>
                </div>
                <div className="row">
                  {/* jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload*/}
                  <div className="col-md-4">Preview : </div>
                </div>
              </div>
              {/* About 3 */}
              <div className="row mb-5">
                <div className="col-md-4 form-group">
                  <label>Title 3</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title3}
                    onChange={(e) => setTitle3(e.target.value)}></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 3</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle3}
                    onChange={(e) => setSubtitle3(e.target.value)}></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 3</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 3</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description3}
                    onChange={(e) =>
                      setDescription3(e.target.value)
                    }></textarea>
                </div>
                <div className="row">
                  {/* jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload*/}
                  <div className="col-md-4">Preview : </div>
                </div>
              </div>

              {/* About 4 */}
              <div className="row mb-5">
                <div className="col-md-4 form-group">
                  <label>Title 4</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={title4}
                    onChange={(e) => setTitle4(e.target.value)}></input>
                </div>
                <div className="col-md-4 form-group">
                  <label>Subtitle 4</label>
                  <input
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={subtitle4}
                    onChange={(e) => setSubtitle4(e.target.value)}></input>
                </div>
                <div className="col form-group">
                  <label>Gambar 4</label>
                  <input
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}></input>
                </div>
                <div className="col-md-8 form-group">
                  <label>Deskripsi 4</label>
                  <textarea
                    type="text"
                    className="form-control text-white "
                    style={{ background: "#27293d" }}
                    value={description4}
                    onChange={(e) =>
                      setDescription4(e.target.value)
                    }></textarea>
                </div>
                <div className="row">
                  {/* jika kondisi state img sudah ada isinya maka akan muncul tulisan preview dan gambar yang diupload*/}
                  <div className="col-md-4">Preview : </div>
                </div>
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
                  <div className="col-md-6 mx-auto text-center mt-2">
                    <div>
                      <label htmlFor="leftInput" className="form-label">
                        OS :
                      </label>
                      <input
                        type="text"
                        className="form-control text-white"
                        style={{ background: "#27293d" }}
                        id="leftInput"
                        value={minOS}
                        onChange={(e) => setMinOS(e.target.value)}
                      />
                    </div>
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
                  <div className="col-md-6 mx-auto text-center mt-2">
                    <div>
                      <label htmlFor="leftInput" className="form-label">
                        OS :
                      </label>
                      <input
                        type="text"
                        className="form-control text-white"
                        style={{ background: "#27293d" }}
                        id="leftInput"
                        value={recomOS}
                        onChange={(e) => setRecomOS(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              <button
                type="submit"
                className="btn btn-outline-success my-2 mx-2">
                Add
              </button>

              <Link to="/admin/gamelist">
                <button
                  type="button"
                  className="btn btn-outline-danger my-2 mx-2">
                  Cancel
                </button>
              </Link>
            </form>
          </div>

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
          className="sticky-footer">
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

import { useEffect, useState } from "react";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

const Reply = ({ idkomen, idgame }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [tanggal, setTanggal] = useState(new Date());
  const [idUser, setIdUser] = useState("");
  const [nama, setNama] = useState("");
  const [komeni, setKomeni] = useState("");
  const [data, setData] = useState([]);

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

  const addKomen = async (e) => {
    e.preventDefault();

    if (token) {
      const formattedDate = `${tanggal.getDate()}-${
        tanggal.getMonth() + 1
      }-${tanggal.getFullYear()}`;

      const formData = new FormData();
      formData.append("idkomen", idkomen);
      formData.append("idgame", idgame);
      formData.append("tanggal", formattedDate);
      formData.append("iduser", idUser);
      formData.append("rate", "0");
      formData.append("komen", komeni);
      formData.append("aksi", "1");
      formData.append("upload", "0");

      await Api.post("/api/komen/store", formData).then((response) => {
        swal("Good job!", "Comment Post!", "success");
        navigate("/detail/" + idgame);
      });
    } else {
      navigate("/login");
      swal("Must Login!", "You cannot comment before login!", "error");
    }
  };

  const fetchApi = async () => {
    Api.get(`/api/replykomen/${idkomen}/${idgame}`).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <form className="text-white mt-3" onSubmit={addKomen}>
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
            <span className="input-group-text"> Comment :</span>
            <input
              type="text"
              value={komeni}
              className="form-control text-white"
              onChange={(e) => setKomeni(e.target.value)}
              style={{ background: "#27293d" }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#4e73df" }}
        >
          Reply
        </button>
      </form>
      <div>
        {data.map((item, index) => (
          <div key={index} className="text-white mt-3 ms-5">
            <h5>{item.name}</h5>
            <p>{item.komen}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reply;

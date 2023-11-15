import { useEffect, useState } from "react";
import Api from "../../../Api";

const Carousel = () => {
  const [gambar1, setGambar1] = useState("");
  const [gambar2, setGambar2] = useState("");
  const [gambar3, setGambar3] = useState("");

  const fetchApi = async () => {
    await Api.get("api/kategori").then((response) => {
      setGambar1(response.data[0].gambar);
      setGambar2(response.data[1].gambar);
      setGambar3(response.data[2].gambar);
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="active"
            aria-current="true"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="active"
            aria-current="true"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner mt-5 tes">
          <div className="carousel-item active">
            <img
              src={gambar1}
              alt="Colum1"
              className="d-block mx-auto"
              style={{ width: "1350px", height: "450px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={gambar2}
              alt="Colum1"
              className="d-block mx-auto"
              style={{ width: "1350px", height: "450px" }}
            />
          </div>
          <div className="carousel-item ">
            <img
              src={gambar3}
              alt="Colum1"
              className="d-block mx-auto"
              style={{ width: "1350px", height: "450px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

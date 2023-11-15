import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const OtpRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let ambilN = localStorage.getItem("name");
    let ambilE = localStorage.getItem("email");
    let ambilP = localStorage.getItem("password");
    setName(ambilN);
    setEmail(ambilE);
    setPassword(ambilP);
  }, []);

  const handleResendOtp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    await Api.post(`/api/resendotpregister`, formData).then((response) => {
      swal("OTP has been sent !", `Please check your email !`, "success");
    });
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    const formDatas = new FormData();
    formDatas.append("name", name);
    formDatas.append("email", email);
    formDatas.append("password", password);
    formDatas.append("otp", otp);

    await Api.post(`/api/otpverifyregister`, formDatas)
      .then((response) => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login");
        swal("Register Success !", `Welcome ${name} !`, "success");
      })
      .catch((error) => {
        swal("FALSE OTP !", `Please Check OTP Again`, "error");
      });
  };

  return (
    <div style={{ background: "#1e1e2f" }}>
      <div className="container">
        <div
          className="card mx-auto"
          style={{
            width: "37rem",
            backgroundColor: "#27293d",
            marginTop: "80px",
          }}
        >
          <div className="card-body text-white">
            <header style={{ marginTop: "-50px", marginLeft: "170px" }}>
              <div
                className="sidebar-brand-icon rotate-n-15"
                style={{ fontSize: "35px", color: "#4e73df" }}
              >
                <i className="fas fa-gamepad"></i>
              </div>
              <span
                href="#"
                className=" navbar-brand text-decoration-none"
                style={{
                  color: "#4e73df",
                  fontSize: "23px",
                  marginLeft: "70px",
                }}
              >
                GAMESWORLD
              </span>
            </header>
            <hr className="text-white" />
            <div className="text-white"></div>
            <form onSubmit={handleOtp}>
              <div className="mb-2 text-white">
                <div className="row">
                  <div className="col-9">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Code OTP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="col " style={{ marginTop: "30px" }}>
                    <button
                      className="btn"
                      onClick={(e) => handleResendOtp(e)}
                      style={{ backgroundColor: "#4e73df" }}
                    >
                      Resend Code
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn mt-4"
                  style={{ backgroundColor: "#4e73df" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

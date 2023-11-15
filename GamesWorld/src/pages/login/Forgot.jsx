import React, { useState } from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOtp = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    await Api.post(`/api/otp`, formData).then((response) => {
      swal("OTP has been sent !", `Please check your email !`, "success");
    });
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    const formData1 = new FormData();
    formData1.append("email", email);
    formData1.append("otp", otp);
    formData1.append("new_password", password);

    await Api.post(`/api/otpverify`, formData1).then((response) => {
      swal(
        "Password successfully changed !",
        `Please login with new password !`,
        "success"
      );
      navigate("/login");
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
                  <div className="col-7">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col ms-3" style={{ marginTop: "30px" }}>
                    <button
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: "#4e73df" }}
                    >
                      Send Verification Code
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <form onSubmit={handlePassword}>
              <div className="mb-2 text-white" style={{ width: "550px" }}>
                <label className="form-label">Verification Code</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="mb-2 text-white" style={{ width: "550px" }}>
                <label className="form-label">New Password</label>
                <input
                  type="teks"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-2 text-white" style={{ width: "550px" }}>
                <label className="form-label">Input Password again</label>
                <input type="teks" className="form-control" />
              </div>
              <button
                type="submit"
                className="btn mt-4"
                style={{ backgroundColor: "#4e73df" }}
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

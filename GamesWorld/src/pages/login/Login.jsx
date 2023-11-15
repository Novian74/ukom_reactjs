// import React from 'react'
import { useNavigate } from "react-router-dom";
import img from "./penguin.jpeg";
import { useEffect, useState } from "react";
import Api from "../../Api";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/homepage");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    
    if (isRecaptchaVerified) {
      const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await Api.post("api/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        swal(
          "Berhasil Login!",
          `Selamat Datang , ${response.data.user.name}!`,
          "success"
        );
        navigate("/admin/homepage");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
      // Tampilkan pesan kesalahan jika reCAPTCHA belum diisi
     
    } else {
      swal(
        "ReCAPTCHA Verification",
        "Please complete the reCAPTCHA verification.",
        "error"
      );
      return;
    }
  };
  return (
    <div style={{ background: "#1e1e2f" }}>
      <div className="container text-white">
        {/* Outer Row  */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-1" style={{ background: "#27293d" }}>
                {/* Nested Row within Card Body  */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <img
                      src={img}
                      alt=""
                      style={{ width: "390px", height: "530px" }}
                      className="mt-3 ml-5"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5 mt-1" style={{ fontSize: "40px" }}>
                      <p
                        className="sidebar-brand d-flex align-items-center justify-content-center font-weight-bold"
                        style={{ color: "#0d6efd" }}
                      >
                        <div className="sidebar-brand-icon rotate-n-15">
                          <i className="fas fa-gamepad fa-lg"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                          GamesWorld
                        </div>
                      </p>
                      <div className="text-center mt-4">
                        <h1 className="h4 mb-4 text-white">Welcome Back!</h1>
                      </div>
                      {validation.message && (
                        <div
                          style={{
                            border: "1px solid red",
                            borderRadius: "1rem",
                            marginBottom: "10px",
                            backgroundColor: 'pink'
                          }}
                        >
                          <p
                            className="text-center mt-3"
                            style={{
                              color: "red",
                              fontSize: "15px",
                            }}
                          >
                            {validation.message}
                          </p>
                        </div>
                      )}
                      <form className="user" onSubmit={loginHandler}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                          {validation.email != null ? (
                            <div
                              style={{
                                // border: "1px solid red",
                                // borderRadius: "1rem",
                                marginTop: "10px",
                                // backgroundColor: 'pink'
                              }}
                            >
                              <p
                                className="text-left ml-3"
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                }}
                              >
                                { "*" + validation.email[0]}
                              </p>
                            </div>
                          ) : (<div></div>)
                        }
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>
                          {validation.password != null ? (
                            <div
                              style={{
                                // border: "1px solid red",
                                // borderRadius: "1rem",
                                marginTop: "10px",
                              }}
                            >
                              <p
                                className="text-left ml-3"
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  fontStyle: 'italic'
                                }}
                              >
                                {"*" + validation.password[0]}
                              </p>
                            </div>
                          ) : (<div></div>)}
                        </div>
                        <div className="form-group ms-4">
                          <ReCAPTCHA
                            sitekey="6LdNMecoAAAAACVQw3QKacgjTDIr1b-pGb0_XBFq"
                            onChange={() => setIsRecaptchaVerified(true)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                        <a
                          href="/"
                          className="btn btn-success btn-user btn-block"
                        >
                          Back
                        </a>
                        <hr />
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

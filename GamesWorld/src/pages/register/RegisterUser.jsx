// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../Api";
import swal from "sweetalert";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("user");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("role", role);

    //send data to server
    await Api.post("/api/otpregister", formData)
      .then(() => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        //redirect to logi page
        navigate("/register/regisotp");
        swal("OTP send!", `Please Check Your Email!`, "success");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      });
  };
  return (
    <div style={{ background: "#1e1e2f" }}>
      <div className="container text-white">
        {/* Outer Row  */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-4">
              <div className="card-body p-1" style={{ background: "#27293d" }}>
                {/* Nested Row within Card Body  */}
                <div className="row d-flex justify-content-center ms-3">
                  <div className="col-lg-7">
                    <div className="p-2 mt-3" style={{ fontSize: "40px" }}>
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
                        <h1 className="h4 mb-4 text-white">Register </h1>
                      </div>
                      {validation.message && (
                        <div>
                          {validation.message && (
                            <div
                              style={{
                                border: "1px solid red",
                                borderRadius: "1rem",
                                marginBottom: "10px",
                                backgroundColor: "pink",
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
                        </div>
                      )}
                      <form className="user" onSubmit={registerHandler}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const sanitizedValue = inputValue.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setName(sanitizedValue);
                            }}
                          ></input>

                          {validation.name && (
                            <div
                              style={{
                                marginBottom: "10px",
                              }}
                            >
                              <p
                                className="text-left ml-2"
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                }}
                              >
                                {validation.message}
                                {"*" + validation.name[0]}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                          {validation.email && (
                            <div
                              style={{
                                marginBottom: "10px",
                              }}
                            >
                              <p
                                className="text-left ml-2"
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                }}
                              >
                                {validation.message}
                                {"*" + validation.email[0]}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>
                          {validation.password && (
                            <div
                              style={{
                                marginBottom: "10px",
                              }}
                            >
                              <p
                                className="text-left ml-2"
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                }}
                              >
                                {validation.message}
                                {"*" + validation.password[0]}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Password Confirmation"
                            value={passwordConfirmation}
                            onChange={(e) =>
                              setPasswordConfirmation(e.target.value)
                            }
                          ></input>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Register
                        </button>
                        <Link to={"/login"}>
                          <button className="btn btn-secondary btn-user btn-block">
                            Already have an account?
                          </button>
                        </Link>
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

export default RegisterUser;

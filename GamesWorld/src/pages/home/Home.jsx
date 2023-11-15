// import React from 'react'

const Home = () => {
  return (
    // Content Wrapper
    <div style={{ backgroundColor: "#1e1e2f" }}>
      {/* Topbar  */}
      <nav
        style={{ backgroundColor: "#1e1e2f" }}
        className="navbar navbar-expand topbar mb-4 static-top shadow"
      >
        {/* Sidebar Toggle (Topbar)  */}

        <button
          className="btn btn-link d-md-none rounded-circle mr-3"
          data-toggle="collapse"
          type="button"
          data-target="#collapseExample"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <i className="fa fa-bars"></i>
              </button> */}

        {/* Topbar Navbar  */}
        <ul className="navbar-nav ml-auto">
          {/* <div className="topbar-divider d-none d-sm-block"></div>  */}

          {/* Nav Item - User Information  */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-light font-weight-bold">
                Log In
              </span>
              {/* <img
                className="img-profile rounded-circle"
                src="public/icon/undraw_profile.svg"
              /> */}
            </a>
            {/* Dropdown - User Information  */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Log In
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* End of Topbar  */}

      {/* Content */}
      <div className="container-fluid">
        {/* Page Heading  */}
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <div className="row">
            <div className="col">
              <h1 className="h3 mb-0 text-light">Search</h1>
            </div>
            <div className="col">Filter</div>
          </div>
        </div>

        {/* Content Row  */}
        <div className="row">
          {/* Authors  */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-primary shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Game List
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-light">
                      100 Game
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories  */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-info shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      User Comments
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-light">
                          250 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comment-dots fa-2x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post  */}
          <div className="col-12 col-lg-4 mb-4">
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card border-left-success shadow h-100 py-2"
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      User
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-light">
                      50 Users
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-friends fa-2x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Row  */}
        <div className="row">
          {/* Content Column  */}
          {/* <div className="col-lg-6 mb-4"> */}
          {/* Jumlah User Post -di setiap user ada jumlah post-  */}
          {/* <div
              style={{ backgroundColor: "#1e1e2f" }}
              className="card shadow mb-4">
              <div
                style={{ backgroundColor: "#1e1e2f" }}
                className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">User Post</h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  Server Migration <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">
                  Sales Tracking <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">
                  Customer Database <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">
                  Payout Details <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <h4 className="small font-weight-bold">
                  Account Setup <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          <div className="col-lg-12 mb-4">
            {/* Jumlah Post Categories -di setiap kategori ada jumlah post-  */}
            <div
              style={{ backgroundColor: "#27293d" }}
              className="card shadow mb-4"
            >
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card-header py-3"
              >
                <h6 className="m-0 font-weight-bold text-primary">
                  Genre Game
                </h6>
              </div>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  First Person Shooter <span className="float-right">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Third Person Shooter <span className="float-right">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Football <span className="float-right">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  RTS <span className="float-right">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h4 className="small font-weight-bold">
                  Horrors <span className="float-right">Complete!</span>
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            {/* Illustrations  */}
            {/* <div
              style={{ backgroundColor: "#27293d" }}
              className="card shadow mb-4">
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src="public/icon/undraw_posting_photo.svg"
                    alt="..."
                  />
                </div>
                <p className="text-light">
                  Add some quality, svg illustrations to your project courtesy
                  of
                  <a target="" rel="nofollow" href="https://undraw.co/">
                    unDraw
                  </a>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <a target="" rel="nofollow" href="https://undraw.co/">
                  Browse Illustrations on unDraw &rarr;
                </a>
              </div>
            </div> */}

            {/* Approach  */}
            {/* <div
              style={{ backgroundColor: "#27293d" }}
              className="card shadow mb-4">
              <div
                style={{ backgroundColor: "#27293d" }}
                className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Development Approach
                </h6>
              </div>
              <div className="card-body">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classes.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

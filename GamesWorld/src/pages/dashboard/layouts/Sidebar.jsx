const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <ul
        className="navbar-nav sidebar wrapper position-sticky accordion rounded collapse show"
        style={{ backgroundColor: "#1e1e2f", margin: 10 }}
        id="collapseExample"
      >
        {/* Sidebar - Brand  */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-gamepad"></i>
          </div>
          <div className="sidebar-brand-text mx-3">GamesWorld</div>
        </a>

        {/* Divider  */}
        <hr className="sidebar-divider" />

        {/* Heading  */}
        <div className="sidebar-heading" style={{ color: "grey" }}>
          Admin
        </div>

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/homepage"
          >
            <i className="fas fa-tachometer-alt"></i>

            <span>Dashboard</span>
          </a>
        </li>

        {/* Nav Item - ALl Game List */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/gamelist"
          >
            <i className="fas fa-scroll"></i>
            <span>All Game</span>
          </a>
        </li>

        {/* Nav Item - Top Game */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/recomended"
          >
            <i className="fas fa-scroll"></i>
            <span>Recomended Game</span>
          </a>
        </li>

        {/* Newest Game */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/newesgame"
          >
            <i className="fas fa-scroll"></i>
            <span>Newest Game</span>
          </a>
        </li>

        {/* Indonesia game */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/indonesiangame"
          >
            <i className="fas fa-scroll"></i>
            <span>Indonesian Game</span>
          </a>
        </li>

        {/* Nav Item - Poster Genre */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/genregame"
          >
            <i className="fas fa-list-alt"></i>
            <span>Genre Game</span>
          </a>
        </li>

        {/* Nav Item - User Comment */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/usercomment"
          >
            <i className="fas fa-list-alt"></i>
            <span>User Comments</span>
          </a>
        </li>

        {/* Nav Item - User List */}
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "#0d6efd" }}
            href="/admin/userlist"
          >
            <i className="fas fa-list-alt"></i>
            <span>User List</span>
          </a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* End of Sidebar  */}
    </div>
  );
};

export default Sidebar;

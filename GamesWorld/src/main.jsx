import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ------------------Template------------------ //
// Font Awesome
import "../src/assets/fontawesome-free/css/all.min.css";
// css custom
import "../src/assets/css/sb-admin-2.min.css";
// css bootstrap
import "../src/assets/bootstrap-5.3.2-dist/css/bootstrap.min.css";
// css jquery datatables
import "../src/assets/datatables/dataTables.bootstrap4.min.css";
// jquery
import "../src/assets/jquery/jquery.min.js";
// Bootstrap js
import "../src/assets/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js";
// jquery easing animation
import "../src/assets/jquery-easing/jquery.easing.min.js";
// custom script js
import "../src/assets/js/sb-admin-2.min.js";
//page level plugin
import "../src/assets/datatables/jquery.dataTables.min.js";
import "../src/assets/datatables/dataTables.bootstrap4.min.js";

import "../src/assets/js/datatables.js";

// primereact
import { PrimeReactProvider } from "primereact/api";
//theme
import "primereact/resources/themes/soho-dark/theme.css";
        

// -------------------------------------------- //

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);

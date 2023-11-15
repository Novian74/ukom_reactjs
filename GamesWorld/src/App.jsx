import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/dashboard/layouts/Index";
import GameListLayout from "./pages/dashboard/layouts/GameListLayout.jsx";
import UserCommentLayout from "./pages/dashboard/layouts/UserCommentLayout";
import AddGame from "./pages/dashboard/post/AddGame";
import EditGame from "./pages/dashboard/post/EditGame";
import Login from "./pages/login/Login";
import AllGame from "./pages/home/All/AllGame";
import SeeAll from "./pages/home/SeeAll";
import Detail from "./pages/home/Details/Detail";
import TopGameLayout from "./pages/dashboard/layouts/TopGameLayout";
import NewestGameLayout from "./pages/dashboard/layouts/NewestGameLayout";
import IndonesianGameLayout from "./pages/dashboard/layouts/IndonesianGameLayout";
import GenreGameLayout from "./pages/dashboard/layouts/GenreGameLayout";
import AddGenre from "./pages/dashboard/post/AddGenre";
import EditGenre from "./pages/dashboard/post/EditGenre";
import { Comment } from "./pages/home/Comment";
import LoginUser from "./pages/login/LoginUser";
import RegisterUser from "./pages/register/RegisterUser";
import UserListLayout from "./pages/dashboard/layouts/UserListLayout";
import Register from "./pages/register/Register";
import Kategori from "./pages/home/Categori/Kategori";
import UserLayout from "./pages/home/UserLayout";
import Forgot from "./pages/login/Forgot";
import OtpVerify from "./pages/login/OtpVerify";
import { OtpRegister } from "./pages/register/OtpRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}></Route>
        <Route path="/allgame" element={<AllGame />}></Route>
        <Route path="/seeall/:id" element={<SeeAll />}></Route>
        <Route path="/kategori/:id" element={<Kategori />}></Route>

        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/register/otp" element={<OtpVerify />}></Route>
        <Route path="/register/regisotp" element={<OtpRegister />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/admin/homepage" element={<Index />}></Route>
        <Route path="/admin" element={<Login />}></Route>
        <Route path="/admin/register" element={<Register />}></Route>

        <Route path="/admin/gamelist/addgame" element={<AddGame />}></Route>
        <Route
          path="/admin/gamelist/editgame/:id"
          element={<EditGame />}
        ></Route>
        <Route path="/admin/genregame/addgenre" element={<AddGenre />}></Route>
        <Route
          path="/admin/genregame/editgenre/:id"
          element={<EditGenre />}
        ></Route>

        <Route path="/history" element={<Comment />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/admin/gamelist" element={<GameListLayout />}></Route>
        <Route path="/admin/recomended" element={<TopGameLayout />}></Route>
        <Route path="/admin/newesgame" element={<NewestGameLayout />}></Route>
        <Route
          path="/admin/indonesiangame"
          element={<IndonesianGameLayout />}
        ></Route>
        <Route
          path="/admin/usercomment"
          element={<UserCommentLayout />}
        ></Route>
        <Route path="/admin/genregame" element={<GenreGameLayout />}></Route>
        <Route path="/admin/userlist" element={<UserListLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

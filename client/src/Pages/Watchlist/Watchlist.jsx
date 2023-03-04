import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getMovies,
  setMoviesToNull,
} from "../../Redux/Services/movies/getMovies";
import { setWatchlist } from "../../Redux/Services/movies/setWatchlist";

// Context
import { useMovieContext } from "../../Context/Context";

// Components
import Header from "../../Components/Header/Header";
import SmallHeader from "../../Components/Header/SmallHeader/SmallHeader";
import Menu from "../../Components/Menu/Menu";
import Movies from "../../Components/Movies/Movies";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Watchlists = () => {
  const { mode } = useMovieContext();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.watchlist.user);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    dispatch(setMoviesToNull());

    const savedToken = sessionStorage.getItem("token");

    if (savedToken !== "" || savedToken !== undefined || savedToken !== null) {
      dispatch(setWatchlist());
      dispatch(getMovies("watchlist"));
    }
  }, [dispatch]);

  return (
    <div className={mode === true ? "home lightBg1" : "home darkBg1"}>
      <Header />
      <SmallHeader />
      <Menu />
      <Movies />
      <Login />
      <Signup />
    </div>
  );
};

export default Watchlists;

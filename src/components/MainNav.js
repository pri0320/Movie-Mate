import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Link } from "react-router-dom";
import "./MainNav.css";

// const pages = [
//   {label: "Trending", link: "/"},
//   {label: "Movies", link: "/movies"},
//   {label: "TV Series", link: "/series"},
//   {label: "Search", link: "/search"}
// ]
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
    opacity: 1,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const history = useHistory();

  // useEffect(() => {
  //   if (value === 0) {
  //     history.push("/");
  //   } else if (value === 1) {
  //     history.push("/movies");
  //   } else if (value === 2) {
  //     history.push("/series");
  //   } else if (value === 3) {
  //     history.push("/search");
  //   }
  // }, [value, history]);
  // const labelIcon = document.querySelector(".MuiBottomNavigationAction-label");
  // console.log(labelIcon);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <Link to="/" className="icon">
        <WhatshotIcon /> Trending
      </Link>

      <Link to="/movies" className="icon">
        <MovieIcon /> Movies
      </Link>
      <Link to="/series" className="icon">
        <TvIcon /> TV Series
      </Link>
      <Link to="/search" className="icon">
        <SearchIcon /> Search
      </Link>
    </BottomNavigation>
  );
}

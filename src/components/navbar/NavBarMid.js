import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import UserIcon from "../svgs/UserIcon";
import BagIcon from "../svgs/BagIcon";

const NavBarMid = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <LogoSvg />
        <div className={classes.icons}>
            <SearchIcon />
            <HeartIcon />
            <UserIcon />
            <BagIcon />
        </div>
        <div className={classes.searchBar}></div>
      </div>
    </div>
  );
};
export default NavBarMid;

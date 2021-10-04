import { IoMdNotifications } from "react-icons/io";
const Header = () => {
  return (
    <header>
      <div className="user">
        <div className="user-img">
          <img src="RedIsland.jpg" alt="user-img" />
        </div>
        <div className="user-text">
          <p>Buenos días</p>
          <p>Alan</p>
        </div>
      </div>
      <div className="notifications">
        <IoMdNotifications />
      </div>
    </header>
  );
};

export default Header;

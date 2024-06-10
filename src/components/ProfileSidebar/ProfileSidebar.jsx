import { NavLink } from "react-router-dom";

function ProfileSidebar() {
  return (
    <div className="sidebar">
      <NavLink activeClassName="active" to="/Profile">
        <li>Профиль</li>
      </NavLink>
      <NavLink activeClassName="active" to="/Orders">
        <li className="profile">Заказы</li>
      </NavLink>
    </div>
  );
}

export default ProfileSidebar;

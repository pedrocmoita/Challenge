import { Link } from "react-router-dom";

import { menus } from '../utils/menus';

const Sidebar = () => {
  return (
    <ul>
    {menus.map((menu) => (
      <li key={menu.name}>
        <Link
          to={menu.link}
          className="block p-2"
        >
          {menu.name}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default Sidebar
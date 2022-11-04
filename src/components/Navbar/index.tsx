import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../../constants";
import { SvgNavbar } from "../../svg/SvgNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center py-15px px-15px justify-between">
        {NAVIGATION.map((route) => (
          <NavLink to={route.LINK} key={route.LINK}>
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "flex items-center p-2 bg-black_custom rounded-20px text-cyan_custom"
                    : ""
                }
              >
                <SvgNavbar
                  color={isActive ?? false}
                  route={route.LINK}
                  class_name={isActive ? "mx-5px" : ""}
                />
                <p className={isActive ? "mx-5px" : ""}>
                  {isActive ? route.NAME : ""}
                </p>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

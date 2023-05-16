import { Link } from "react-router-dom";

const CollapsedMenu = ({ isOpen }) => {
  // ... Menu content and toggle button logic

  return (
    <aside className="bg-base-200 w-80">
      {isOpen && (
        <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1">
          <li>
            <Link to={"/dashboard"}>
              {" "}
              Admin --
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"}>
              {" "}
              Admin --
            </Link>
          </li>
          
        </ul>
      )}
    </aside>
  );
};

export default CollapsedMenu;

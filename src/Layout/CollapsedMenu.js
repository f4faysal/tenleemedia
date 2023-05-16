import { Link } from "react-router-dom";

const CollapsedMenu = ({ isOpen , activeItem , handleItemClick}) => {
  // ... Menu content and toggle button logic

 

  return (
    <aside className="bg-indigo-950  w-72">
      {isOpen && (
        <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1 text-white">
          <li
            className={` mt-1 rounded-md ${
              activeItem === "Admin" ? "bg-[#40DAF4] text-black" : ""
            }`}
            onClick={() => handleItemClick("Admin")}
          >
            <Link to={"/dashboard"}> Admin --</Link>
          </li>
          <li
            className={` mt-1 rounded-md ${
              activeItem === "Admin -" ? "bg-[#40DAF4] text-black" : ""
            }`}
            onClick={() => handleItemClick("Admin -")}
          >
            <Link to={"/dashboard"}> Admin --</Link>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default CollapsedMenu;

import { NavLink } from "react-router-dom";
import { useShowMenuStore } from "../store";

//componenete global

export const Navbar = () => {
  const { showMenu, openCloseMenu } = useShowMenuStore();

  return (
    <nav className="select-none">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center md:order-2 w-full">
          <button
            type="button"
            className="text-start bg-teal-700 w-full text-white p-1.5 text-xl"
            onClick={() => openCloseMenu()}
          >
            &#9776;
          </button>
        </div>
        <div id="mega-menu" className={`${showMenu && "hidden"} w-full`}>
          <ul className="flex flex-col text-sm font-medium">
            <ItemHamburguer nameItem="Agregar aula" path="/" />
            <ItemHamburguer nameItem="Ver aulas" path="classroom" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface ItemHamburguerProps {
  nameItem: string;
  path: string;
}

const styleCommon =
  "block p-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700";
const ItemHamburguer = ({ nameItem, path }: ItemHamburguerProps) => {
  const { openCloseMenu } = useShowMenuStore();
  return (
    <li className="cursor-pointer">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${styleCommon} bg-blue-400` : `${styleCommon}`
        }
        onClick={() => openCloseMenu()}
      >
        {nameItem}
      </NavLink>
    </li>
  );
};
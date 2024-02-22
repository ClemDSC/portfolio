import { Link } from "react-router-dom";
import Social from "./Social";
import { useTheme } from "../context/ThemeContext";

import Darkmode from "../utils/Darkmode";

function NavbarMobile() {
  const { theme } = useTheme();
  return (
    <>
      <header className="navbar pb-0">
        <nav className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52"
            >
              <li>
                <Link to={"/"} className="pt-4">
                  {theme === "winter" ? (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#334F69"
                      stroke="#334F69"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-26.000000, -15.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(26.000000, 15.000000)"
                            >
                              {" "}
                              <rect
                                fill="#334F69"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <polygon
                                id="路径"
                                points="4.5 9 4.5 21 19.5 21 19.5 9 12 3"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="4.5 21 4.5 9 2 11 12 3 22 11 19.5 9 19.5 21"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="9.5 14.5 9.5 21 14.5 21 14.5 14.5"
                                stroke="#334F69"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <line
                                id="路径"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="4.5"
                                x2="19.5"
                                y1="21"
                                y2="21"
                              ></line>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#C8CBD0"
                      stroke="#C8CBD0"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-26.000000, -15.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(26.000000, 15.000000)"
                            >
                              {" "}
                              <rect
                                fill="#C8CBD0"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <polygon
                                id="路径"
                                points="4.5 9 4.5 21 19.5 21 19.5 9 12 3"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="4.5 21 4.5 9 2 11 12 3 22 11 19.5 9 19.5 21"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="9.5 14.5 9.5 21 14.5 21 14.5 14.5"
                                stroke="#C8CBD0"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <line
                                id="路径"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="4.5"
                                x2="19.5"
                                y1="21"
                                y2="21"
                              ></line>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  )}
                  <span className="text-lg">Accueil</span>
                </Link>
              </li>
              <li>
                <Link to={"/projects"} className="pt-4">
                  {theme === "winter" ? (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#334F69"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-175.000000, -80.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(175.000000, 80.000000)"
                            >
                              {" "}
                              <rect
                                fill="#334F69"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <path
                                d="M2,4.5 L2,20.5 L4.5,10.5 L19.75,10.5 L19.75,7.5 C19.75,6.9477 19.3023,6.5 18.75,6.5 L12,6.5 L9.5,3.5 L3,3.5 C2.447715,3.5 2,3.947715 2,4.5 Z"
                                id="路径"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>{" "}
                              <polygon
                                id="路径"
                                points="20 20.5 22 10.5 4.40625 10.5 2 20.5"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#C8CBD0"
                      stroke="#C8CBD0"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-175.000000, -80.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(175.000000, 80.000000)"
                            >
                              {" "}
                              <rect
                                fill="#C8CBD0"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <path
                                d="M2,4.5 L2,20.5 L4.5,10.5 L19.75,10.5 L19.75,7.5 C19.75,6.9477 19.3023,6.5 18.75,6.5 L12,6.5 L9.5,3.5 L3,3.5 C2.447715,3.5 2,3.947715 2,4.5 Z"
                                id="路径"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>{" "}
                              <polygon
                                id="路径"
                                points="20 20.5 22 10.5 4.40625 10.5 2 20.5"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  )}
                  <span className="text-lg">Projets</span>
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="pt-4">
                  {theme === "winter" ? (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      id="Stock_cut"
                      version="1.1"
                      fill="#334F69"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <desc></desc>{" "}
                        <g>
                          {" "}
                          <circle
                            cx="16"
                            cy="16"
                            fill="none"
                            r="15"
                            stroke="#334F69"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></circle>{" "}
                          <path
                            d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                            fill="none"
                            stroke="#334F69"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></path>{" "}
                          <circle
                            cx="16"
                            cy="11"
                            fill="none"
                            r="6"
                            stroke="#334F69"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></circle>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      id="Stock_cut"
                      version="1.1"
                      fill="#C8CBD0"
                      stroke="#C8CBD0"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <desc></desc>{" "}
                        <g>
                          {" "}
                          <circle
                            cx="16"
                            cy="16"
                            fill="none"
                            r="15"
                            stroke="#C8CBD0"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></circle>{" "}
                          <path
                            d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                            fill="none"
                            stroke="#C8CBD0"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></path>{" "}
                          <circle
                            cx="16"
                            cy="11"
                            fill="none"
                            r="6"
                            stroke="#C8CBD0"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="2"
                          ></circle>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  )}
                  <span className="text-lg">À propos</span>
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="py-4">
                  {theme === "winter" ? (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#334F69"
                      stroke="#334F69"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-101.000000, -207.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(101.000000, 207.000000)"
                            >
                              {" "}
                              <rect
                                fill="#334F69"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <polygon
                                id="路径"
                                points="16.5 19 11 19 11 15 18 15 18 11 22 11 22 19 19.5 19 18 20.5"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="2 3 18 3 18 15 8.5 15 6.5 17 4.5 15 2 15"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <line
                                id="路径"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="9.5"
                                x2="10"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                id="路径"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="13"
                                x2="13.5"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                id="路径"
                                stroke="#334F69"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="6"
                                x2="6.5"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#C8CBD0"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="页面-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g
                            id="导航图标"
                            transform="translate(-101.000000, -207.000000)"
                          >
                            {" "}
                            <g
                              id="编组"
                              transform="translate(101.000000, 207.000000)"
                            >
                              {" "}
                              <rect
                                fill="#C8CBD0"
                                fill-opacity="0.01"
                                fill-rule="nonzero"
                                height="24"
                                id="矩形"
                                width="24"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <polygon
                                id="路径"
                                points="16.5 19 11 19 11 15 18 15 18 11 22 11 22 19 19.5 19 18 20.5"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <polygon
                                id="路径"
                                points="2 3 18 3 18 15 8.5 15 6.5 17 4.5 15 2 15"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></polygon>{" "}
                              <line
                                id="路径"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="9.5"
                                x2="10"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                id="路径"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="13"
                                x2="13.5"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                id="路径"
                                stroke="#C8CBD0"
                                stroke-linecap="round"
                                stroke-width="1.5"
                                x1="6"
                                x2="6.5"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  )}
                  <span className="text-lg">Contact</span>
                </Link>
              </li>
              <div className="divider m-0"></div>
              <li className="flex flex-row justify-evenly">
                <Social />
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            {theme === "winter" ? (
              <img
                className="h-10 w-12 rounded-lg"
                src="../assets/logo/short_logo_purple.webp"
                alt="logo clemence pham developpement web"
              />
            ) : (
              <img
                className="h-10 w-12 rounded-lg"
                src="../assets/logo/short_logo_white.webp"
                alt="logo clemence pham developpement web"
              />
            )}
          </Link>
        </nav>
        <div className="navbar-end">
          <Darkmode />
        </div>
      </header>
      <div className="divider m-0"></div>
    </>
  );
}

export default NavbarMobile;

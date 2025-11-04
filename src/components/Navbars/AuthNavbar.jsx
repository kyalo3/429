import AuthDropDown from "../Dropdowns/AuthDropdown";
import { useState } from "react";
import logo from '../../assets/images/logo.png'


export default function Navbar({ transparent }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav
        className={
          (transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              href="/"
              className={
                (transparent ? "text-white" : "text-slate-700") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
            >
              <img className="w-32 h-auto" src={logo} alt="Logo" />
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (transparent ? "text-white" : "text-slate-700") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg bg-white" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/#services"
                >
                  Services
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/#faqs"
                >
                  FAQs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (transparent
                        ? "lg:text-slate-200 text-slate-400"
                        : "text-slate-400") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (transparent
                        ? "lg:text-slate-200 text-slate-400"
                        : "text-slate-400") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-slate-200 text-slate-700"
                      : "text-slate-700 hover:text-slate-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (transparent
                        ? "lg:text-slate-200 text-slate-400"
                        : "text-slate-400") +
                      " fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <li className="flex items-center">
                <AuthDropDown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


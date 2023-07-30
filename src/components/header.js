import { withPrefix } from "gatsby"
import * as React from "react"
import { useState } from "react"
import routes from "./routes"

const Header = () => {
  const [isUserLoggedIn] = useState(localStorage.getItem("_alchemy_admin"))

  function handleSubmit() {
    window.location.href = withPrefix(routes.SIGNUP)
  }
  function handleLogin() {
    window.location.href = withPrefix(routes.LOGIN)
  }
  function handleLogout() {
    localStorage.removeItem("_alchemy_admin")
    window.location.href = withPrefix(routes.OVERVIEW)
  }
  return (
    <div className="bg-white w-full py-3 shadow-sm fixed">
      <div className="container mx-auto">
        <div className="flex lg:justify-between items-center">
          <div className="px-2 lg:hidden">
            <svg
              version="1.1"
              viewBox="0 0 24 24"
              className="hover:border-2 hover:border-[#f07809] rounded-md px-2 h-[30px] inline-block"
            >
              <g
                id="Icons+Indicators-/-System-Icons-/-menu-/-#333333"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="menu">
                  <polygon
                    id="bg"
                    fill-opacity="0"
                    fill="#D8D8D8"
                    points="0 0 24 0 24 24 0 24"
                  ></polygon>
                  <path
                    d="M21.5,18.5 L2.5,18.5"
                    id="path_1"
                    stroke="#e67309"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M21.5,12 L2.5,12"
                    id="path_1"
                    stroke="#e67309"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M21.5,5.5 L2.5,5.5"
                    id="path_1"
                    stroke="#e67309"
                    stroke-linecap="round"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <a href={routes.OVERVIEW}>
            <img src="/img/logo-2.png" className="h-[50px]" alt="logo" />
          </a>
          <div className="lg:flex items-center hidden ">
            <div className="flex gap-2 items-center">
              {isUserLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="rounded-full border hover:bg-[#e67309] text-white border-[#e67309] px-6 py-1 text-sm bg-[#f07809]"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="rounded-full bg-transparent border hover:bg-[#e67309] hover:text-white border-[#e67309] px-6 py-1 text-sm text-[#f07809] "
                  >
                    Login
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="rounded-full border hover:bg-[#e67309] text-white border-[#e67309] px-6 py-1 text-sm bg-[#f07809]"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

import { withPrefix } from "gatsby"
import * as React from "react"
import routes from "./routes"

const Footer = ({ help }) => {
  function handleSubmit() {
    window.location.href = withPrefix(routes.HELP)
  }
  return (
    <div className="bg-transparent w-full py-4 flex justify-end items-end">
      <div className="container mx-auto">
        <div className="flex lg:justify-between justify-center items-center">
          <div className="lg:flex gap-2 hidden">
            {help && (
              <button
                onClick={handleSubmit}
                className="text-[#999] hover:underline"
              >
                {help}
              </button>
            )}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://racami.com/#Contact-us"
              className="text-[#999] px-4 hover:underline"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-center gap-2">
            <img src="/img/siteseal_gd_3_h_l_m.gif" alt="footer" />
            <div className="text-xs">
              Copyright © 2023 Alchem-e™. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

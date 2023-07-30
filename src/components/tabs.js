import { navigate } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

const Tabs = ({ svg, name, description, link }) => {
  function handleSubmit() {
    link.length > 0 && navigate(`${link}`)
  }
  return (
    <button
      onClick={handleSubmit}
      className="bg-white p-10 border border-white hover:border-[#f07809] flex flex-col items-center justify-center"
    >
      <div>
        <img src={`/svg/${svg}`} alt="svg" className="w-12" />
      </div>
      <div className="font-semibold text-xl pt-10">{name}</div>
      <div className="grid grid-cols-3 py-3 items-center">
        <div className="text-xs col-start-2 text-[#f07809]">{description}</div>
        <div className="pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#f07809"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  )
}
Tabs.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
}
Tabs.defaultProps = {
  link: "",
  description: "Pay bill",
}
export default Tabs

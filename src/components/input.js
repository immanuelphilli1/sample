import * as React from "react";

const Input = ({ placeholder, value, handleSubmit, label, handleChange, name, tip }) => {
  return (
    <div>
      <label htmlFor={label} className="pl-1">
        <span className="text-xs">{label} *</span>
      </label>
      <div className="border border-[#ccc] flex items-center rounded-md bg-white">
        <input
          className="w-full outline-none px-2"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          name={name}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-[#e67309]"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      <small className="text-xs pt-2 pl-1 text-[#999]">TIP: {tip}</small>
    </div>
  );
};

export default Input;

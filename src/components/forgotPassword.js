import * as React from "react";

const ForgottenPassword = ({ email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-2xl font-semibold">
        Forgot Password to Alchem-<span className="i italic">e</span>
        <sup className="text-sm font-semibold">TM</sup> Pay
      </div>
      <div className="text-[#999] text-sm pt-2">
        Already have an account?{" "}
        <a href="/login" className="text-[#f07809]">
          Login
        </a>
      </div>
      <div className="border border-[#ccc] flex items-center rounded-sm bg-white mt-2">
        <div className="px-4 py-2 bg-gray-200 rounded-l-sm">
          <svg
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Icons+Indicators-/-System-Icons-/-admin-/-#333333"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="admin_my_vodafone_app_profile">
                <polygon
                  id="bg"
                  fill-opacity="0"
                  fill="#999"
                  points="0 0 24 0 24 24 0 24"
                ></polygon>
                <path
                  d="M19.5,20.5125 C18.69,15.0275 15.35375,12.48375 12.045,12.48375 C8.73625,12.48375 5.31125,15.02625 4.5,20.51125"
                  id="Shape"
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.1819875,4.801775 C16.93935,6.5591375 16.93935,9.408375 15.1819875,11.1657375 C13.424625,12.9231 10.5753875,12.9231 8.818025,11.1657375 C7.0606625,9.408375 7.0606625,6.5591375 8.818025,4.801775 C10.5753875,3.0444125 13.424625,3.0444125 15.1819875,4.801775"
                  id="Shape"
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <input
          className="w-full outline-none px-2"
          type="email"
          placeholder={`Email Address`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value, e.target.name);
          }}
          required
          name={`email`}
        />
      </div>
      <div className="pt-3">
        <button
          type="submit"
          className="bg-[#f07809] hover:bg-[#e67309] text-white px-2 py-1 w-full rounded-sm"
        >
          {" "}
          Recover Password
        </button>
      </div>
    </form>
  );
};

export default ForgottenPassword;

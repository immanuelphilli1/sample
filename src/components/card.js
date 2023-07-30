import { navigate } from "gatsby";
import * as React from "react";

const Card = () => {
  function handleSubmit() {
    navigate("/sign-up");
  }
  return (
    <div className="bg-white px-10 py-4 flex flex-col md:flex-row justify-between">
      <div>
        <div className="font-semibold text-xl py-4">
          Sign Up to get bill reminders & autopay
        </div>
        <div className="text-xs text-[#999]">
          • Manage your communications and billing with one tool <br /> •
          Real-time notifications when paymnts are due <br /> • Make payments
          proactively by setting up auto payments
        </div>
      </div>
      <div className="flex gap-2 items-center py-10 w-full md:w-1/3">
        <button
          onClick={handleSubmit}
          className="w-full border rounded-md hover:bg-[#e67309] text-white border-[#e67309] px-6 py-2 text-sm bg-[#f07809]"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Card;

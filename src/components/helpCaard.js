import * as React from "react";

const HelpCard = () => {
  return (
    <div className="bg-white p-10 flex flex-col justify-center items-center">
      <a href="#tag" className="underline text-[#999] hover:text-black">
        Get help with your payment
      </a>
      <a href="#tag" className="font-bold pb-2 text-[#f07809] hover:underline">
        Read and get help from our FAQ's
      </a>
      <div className="pt-2 text-[#999]">Chat with us</div>
      <button className="text-[#f07809] hover:underline">
        Send us an email
      </button>
      <div className="font-bold text-lg text-[#999]">
        CALL US +1.678.730.7700
      </div>
    </div>
  );
};

export default HelpCard;

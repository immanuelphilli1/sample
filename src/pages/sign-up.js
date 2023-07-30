import * as React from "react";
import Footer from "../components/footer";
import SignUp from "../components/signUp";

const SignUpPage = () => {
  return (
    <div className="bg-polygon">
      <div className="flex flex-col justify-between min-h-screen">
        <div className="hidden md:block" />
        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10">
            <div>
              <SignUp />
            </div>
            <div className="md:flex flex-col items-center justify-center gap-4 hidden">
              <img src="/img/logo-2.png" alt="logo" />
              <div>
                <button className="rounded- bg-transparent border hover:bg-[#e67309] hover:text-white border-[#e67309] px-6 py-1 text-sm text-[#f07809]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4%] relative ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

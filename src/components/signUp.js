import * as React from "react";

const SignUp = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  accountNumber,
  setAccountNumber,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  confirmEmail,
  setConfirmEmail,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-2xl font-semibold">
        Sign up to Alchem-<span className="i italic">e</span>
        <sup className="text-sm font-semibold">TM</sup> Pay
      </div>
      <div className="text-[#999] text-sm pt-2">
        Already have an account?{" "}
        <a href="/login" className="text-[#f07809]">
          Sign In
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="firstname" className="text-sm">
            First Name
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="text"
            placeholder={`First Name`}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value, e.target.name);
            }}
            required
            name={`firstName`}
          />
        </div>
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="lastname" className="text-sm">
            Last Name
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="text"
            placeholder={`Last Name`}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value, e.target.name);
            }}
            required
            name={`lastName`}
          />
        </div>
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="accountNumber" className="text-sm">
            Account Number
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="text"
            placeholder={`Account Number`}
            value={accountNumber}
            onChange={(e) => {
              setAccountNumber(e.target.value, e.target.name);
            }}
            required
            name={`accountNumber`}
          />
        </div>
        <div className="hidden md:block" />
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
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
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="confirmEmail" className="text-sm">
            Confirm Email Address
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="email"
            placeholder={`Confirm Email Address`}
            value={confirmEmail}
            onChange={(e) => {
              setConfirmEmail(e.target.value, e.target.name);
            }}
            required
            name={`confirm email`}
          />
        </div>
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="text"
            placeholder={`Password`}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value, e.target.name);
            }}
            required
            name={`password`}
          />
        </div>
        <div className=" flex flex-col bg-white mt-2">
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm Password
          </label>
          <input
            className="w-full outline-none px-2 border border-[#ccc] rounded-sm"
            type="text"
            placeholder={`Confirm Password`}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value, e.target.name);
            }}
            required
            name={`confirm password`}
          />
        </div>
      </div>
      <div className="pt-3">
        <button
          type="submit"
          className="bg-[#f07809] hover:bg-[#e67309] text-white px-2 py-1 w-full rounded-sm"
        >
          {" "}
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUp;

import * as React from "react";

const NotFoundPage = () => {
  return (
    <main className="text-center">
      <div className="text-[150px] text-[#f07809]">404</div>
      <h1 className="font-semibold text-2xl pb-4">OOPS! NOTHING WAS FOUND</h1>
      <p className="text-sm">
        The page you are looking for might have been removed, had its name
        changed or is <br /> temporarily unavailable.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

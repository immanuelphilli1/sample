import { navigate } from "gatsby"
import * as React from "react"
import routes from "./routes"

const SearchBillCard = ({ searchResult }) => {
  function goToPaymentPage(e, itemId) {
    e.preventDefault()
    navigate(`${routes.PAYMENT_PAGE}/${itemId}`, { state: { id: itemId } })
  }
  console.log(searchResult)
  return (
    <div className="bg-white p-10 flex flex-col">
      {searchResult.length > 0 ? (
        <>
          <div className="flex pb-20">
            <table
              style={{ border: "solid 1px #ccc", width: "100%" }}
              className="table-auto"
            >
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.destination.name}</td>
                      <td>
                        {item.destination.town.toLowerCase()}
                        {", "}
                        {item.destination.address.toLowerCase()}
                      </td>
                      <td>
                        <button
                          className="w-full border rounded-md hover:bg-[#e67309] text-white border-[#e67309] px-6 py-2 text-sm bg-[#f07809]"
                          onClick={(e) => goToPaymentPage(e, item.id)}
                        >
                          Proceed
                        </button>
                      </td>
                    </tr>
                  )
                })}{" "}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 justify-items-center pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 500.38"
            >
              <path
                fill="#f07809"
                fill-rule="nonzero"
                d="M363.5 234.21 262.15 218.7c4.53 45.55 15.78 96.13 45.93 138.82 33.7 47.76 91.77 86.4 191.94 98.33 7.44.88 12.76 7.64 11.88 15.07-.68 5.75-4.86 10.22-10.14 11.57-32.64 10.88-63.47 16.47-92.42 17.65-79.46 3.26-144.32-26.42-193.76-70.24-48.96-43.39-82.71-100.76-100.41-153.44-6.79-20.21-11.26-39.85-13.36-57.82l-85.9 15.46c-7.34 1.31-14.39-3.58-15.7-10.92-.72-4.08.46-8.05 2.9-11.01L174.55 4.91c4.77-5.76 13.33-6.57 19.09-1.8l1.58 1.54 180.54 207.22c4.92 5.65 4.32 14.23-1.33 19.16-3.12 2.72-7.13 3.75-10.93 3.18z"
              />
            </svg>{" "}
          </div>
          <div className="flex items-center justify-center font-bold text-lg text-center pb-20">
            Start by searching for bills by entering the <br /> owner's name in
            the search box
          </div>
        </>
      )}
    </div>
  )
}

export default SearchBillCard

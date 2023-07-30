import * as React from "react"
import { useState, useMemo } from "react"
import Layout from "../../components/layout"
import Card from "../../components/card"
import Input from "../../components/input"
import SearchBillCard from "../../components/searchBillCard"
import { bills } from "../../dummies/bills"
import { navigate } from "gatsby"
import routes from "../../components/routes"
function handleClose() {
  navigate(routes.DASHBOARD)
}

const SearchBills = () => {
  const [state, setState] = React.useState({
    name: "",
    address: "",
    account: "",
  })
  const [theBillDetails, setTheBillDetails] = useState([])

  function handler(e) {
    e.preventDefault()
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  function getBillByName(e) {
    e.preventDefault()
    if (state.name === "") return
    let arr = []
    for (var i = 0; i < bills.length; i++) {
      if (bills[i].destination.name.includes(state.name.toUpperCase())) {
        arr.push(bills[i])
        console.log(arr)
      }
    }
    setTheBillDetails(arr)
    return
  }

  function getBillByAccount(e) {
    e.preventDefault()
    let arr = []
    for (var i = 0; i < bills.length; i++) {
      if (bills[i].accountNumber.includes(state.account)) {
        arr.push(bills[i])
        console.log(arr)
      }
    }
    setTheBillDetails(arr)
    return
  }

  function getBillByPropertyAddress(e) {
    return
  }
  const searchResult = useMemo(() => {
    return <SearchBillCard searchResult={theBillDetails} />
  }, [theBillDetails])

  return (
    <Layout>
      <main className="">
        <div className="py-10 flex justify-between">
          <div>
            <div className="font-semibold text-4xl">Search Bills</div>
            <div className="text-xs text-[#999] pt-1">
              By one of the following options
            </div>
          </div>
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className=""
              xlinkTitle="Close"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder={`Owner's Name`}
            label={`Owner's Name`}
            tip={`Please enter owners name`}
            name={`name`}
            handleChange={(e) => {
              handler(e)
            }}
            handleSubmit={(e) => {
              getBillByName(e)
            }}
            value={state?.name}
          />
          <Input
            placeholder={`Account Number`}
            label={`Account Number`}
            tip={`Please enter your tax bill number. Do not enter a year, only enter the number after the dash (e.g. enter 12345, not 2013-12345)`}
            name={`account`}
            handleChange={(e) => {
              handler(e)
            }}
            handleSubmit={(e) => {
              getBillByAccount(e)
            }}
            value={state?.account}
          />
          <Input
            placeholder={`Property Address`}
            label={`Property Address`}
            tip={`Please enter the physical address of the property and not the owner's address. Do not include any suffix like RD or Lane, just enter the main street number and name (e.g. enter 123 Oak, not 123 Oak Street)`}
            name={`address`}
            handleChange={(e) => {
              handler(e)
            }}
            handleSubmit={(e) => {
              getBillByPropertyAddress(e)
            }}
            value={state?.address}
          />
          <div className="md:col-span-3 pt-5">{searchResult}</div>
          <div className="md:col-span-3">
            <Card />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SearchBills

export const Head = () => <title>Alcheme Pay</title>

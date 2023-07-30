import { Router } from "@reach/router"
import { withPrefix } from "gatsby"
import * as React from "react"
import ContextProvider from "../components/hooks/contextProvider"
import Dashboard from "../views/manage/dashboard"
import routes from "../components/routes"
import SearchBills from "../views/manage/searchBills"
const manage = () => (
  <>
    <Router>
      <Wrap path={withPrefix("/")}>
        <Dashboard path={routes.DASHBOARD} />
        <SearchBills path={routes.ADMIN_SEARCH_BILLS} />
      </Wrap>
    </Router>
  </>
)
const Wrap = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>
}

export default manage

export const Head = () => <title>Dashboard</title>

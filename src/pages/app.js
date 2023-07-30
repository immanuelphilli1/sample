import { Router } from "@reach/router"
import * as React from "react"
import routes from "../components/routes"
import HelpPage from "../views/app/help"
import OverView from "../views/app/overview"
import SearchBills from "../views/app/searchBills"
import ForgottenPasswordPage from "./forgot-password"
import LoginPage from "./login"
import SignUpPage from "./sign-up"
import ContextProvider from "../components/hooks/contextProvider"
import { withPrefix } from "gatsby"
const App = () => (
  <Router>
    <Wrap path={withPrefix("/")}>
      <LoginPage path={routes.LOGIN} _key={Math.random()} />
      <SignUpPage path={routes.SIGNUP} _key={Math.random()} />
      <ForgottenPasswordPage
        path={routes.FORGOTTEN_PASSWORD}
        _key={Math.random()}
      />
      <OverView path={routes.OVERVIEW} _key={Math.random()} />
      <SearchBills path={routes.SEARCH_BILLS} _key={Math.random()} />
      <HelpPage path={routes.HELP} _key={Math.random()} />
    </Wrap>
  </Router>
)
const Wrap = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>
}

export default App

export const Head = () => <title>Home Page</title>

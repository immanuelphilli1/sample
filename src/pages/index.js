import { navigate } from "gatsby"
import * as React from "react"
import routes from "../components/routes"
const IndexPage = () => {
  navigate(routes.OVERVIEW)
  return <></>
}

export default IndexPage

export const Head = () => <title>Home Page</title>

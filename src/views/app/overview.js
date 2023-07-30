import * as React from "react"
import Layout from "../../components/layout"
import Tabs from "../../components/tabs"
import Card from "../../components/card"
import routes from "../../components/routes"

const OverView = () => {
  return (
    <Layout>
      <main className="">
        <div className="font-semibold text-4xl py-10">Pay Your Bills</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tabs
            svg={`home.svg`}
            name={`Property Tax`}
            link={routes.SEARCH_BILLS}
          />
          <Tabs svg={`tag.svg`} name={`Tag`} />
          <Tabs svg={`water.svg`} name={`Water/Sewer`} />
          <div className="md:col-span-3">
            <Card />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default OverView

export const Head = () => <title>Alcheme Pay</title>

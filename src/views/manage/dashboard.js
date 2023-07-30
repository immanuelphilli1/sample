import * as React from "react"
import Layout from "../../components/layout"
import routes from "../../components/routes"
import Tabs from "../../components/tabs"

const Dashboard = () => {
  return (
    <Layout>
      <main className="">
        <div className="font-semibold text-4xl py-10">Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tabs
            svg={`home.svg`}
            name={`Tax Payment`}
            description={`Pay bill`}
            link={routes.ADMIN_SEARCH_BILLS}
          />
          <Tabs svg={`tag.svg`} name={`Tag`} description={`Pay bill`} />
          <Tabs
            svg={`manage-payment.svg`}
            name={`Manage Payments`}
            description={`Payments Settings`}
          />
          <Tabs svg={`reporting.svg`} name={`Reporting`} description={`Reports`} />
          <Tabs
            svg={`manage-printing.svg`}
            name={`Manage Pringing`}
            description={`Pay`}
          />
          <Tabs
            svg={`account-reconciliation.svg`}
            name={`Account Reconciliation`}
            description={`Pay`}
          />
          <div className="md:col-span-3">{/* <Card /> */}</div>
        </div>
      </main>
    </Layout>
  )
}

export default Dashboard

export const Head = () => <title>Alcheme Pay</title>

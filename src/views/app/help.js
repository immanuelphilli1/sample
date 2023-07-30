import * as React from "react"
import Layout from "../../components/layout"
import HelpCard from "../../components/helpCaard"

const HelpPage = () => {
  return (
    <Layout>
      <main className="py-10">
        <div className="">
          <HelpCard />
        </div>
      </main>
    </Layout>
  )
}

export default HelpPage

export const Head = () => <title>Alcheme Pay</title>

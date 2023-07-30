import PropTypes from "prop-types"
import React, { useState } from "react"
import admin from "../../dummies/admin"
import Context from "./context"

function ContextProvider({ children }) {
  const [user, setUser] = useState()

  const fetchUser = () => {
    console.log("what is there")
    if (localStorage.getItem("_alchemy_admin")) {
      setUser(JSON.parse(localStorage.getItem("_alchemy_admin")))
    }
  }

  const logAdminIn = () => {
    localStorage.setItem("_alchemy_admin", JSON.stringify(admin))
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        logAdminIn,
        fetchUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = { children: PropTypes.node }

export default ContextProvider

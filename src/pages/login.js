import * as React from "react"
import { useState } from "react"
import { object, string } from "yup"
import Footer from "../components/footer"
import Login from "../components/login"
import routes from "../components/routes"
import admin from "../dummies/admin"
import { validateForm } from "../services/helpers"
import Context from "../components/hooks/context"
let validationSchema = object().shape({
  email: string().required("Email is required"),
  password: string().required("the password is required"),
})
const LoginPage = () => {
  const [state, setState] = useState({ email: "", password: "" })
  const [buttonText, setButtonText] = useState("Login")
  const [animated, setAnimated] = useState("animate__animated animate__bounce")
  const [disabled, setDisabled] = useState(false)
  const { user, logAdminIn } = React.useContext(Context)

  function handler(e) {
    e.preventDefault()
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  function submit(e) {
    e.preventDefault()
    // setDisabled(true)
    setButtonText("Authenticating...")
    validateForm(validationSchema, state)
      .then((res) => {
        if (state.email === admin.email && state.password === "12345") {
          localStorage.setItem("_alchemy_admin", JSON.stringify(admin))

          //logAdminIn()
          console.log(res)
          setButtonText("Authenticated")
          setTimeout(() => {
            window.location.replace(routes.DASHBOARD)
          }, 1500)
        } else {
          console.log("bad day")
          setAnimated("animate__animated animate__wobble")
          setButtonText("Login")
          setDisabled(false)
        }
      })
      .catch((err) => {})
  }
  return (
    <div className="bg-polygon">
      <div className="flex flex-col justify-between min-h-screen">
        <div className="hidden md:block" />
        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10">
            <div>
              <Login
                animated={animated}
                email={state.email}
                password={state.password}
                handleChange={handler}
                handleSubmit={submit}
                disabled={disabled}
                buttonText={buttonText}
              />
            </div>
            <div className="md:flex flex-col items-center justify-center gap-4 hidden">
              <img src="/img/logo-2.png" alt="logo" />
              <div>
                <button className="rounded- bg-transparent border hover:bg-[#e67309] hover:text-white border-[#e67309] px-6 py-1 text-sm text-[#f07809]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4%] relative ">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LoginPage

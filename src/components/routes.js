let routes = {}
const appBasePath = "/app/"
const adminBasePath = "/manage/"
routes.BASEPATH = appBasePath
routes.PAYMENT_PAGE = appBasePath + "payment"
routes.SEARCH_BILLS = appBasePath + "search"
routes.HELP = appBasePath + "help"
routes.OVERVIEW = appBasePath + "overview"
routes.FORGOTTEN_PASSWORD = "forgotten-password"
routes.LOGIN = "login"
routes.SIGNUP = "sign-up"
routes.NOT_FOUND = "404"

routes.DASHBOARD = adminBasePath + "dashboard"
routes.ADMIN_SEARCH_BILLS = adminBasePath + "search"

export default routes

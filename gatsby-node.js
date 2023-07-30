exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }

  if (page.path.match(/^\/manage/)) {
    page.matchPath = "/manage/*"
    createPage(page)
  }
}

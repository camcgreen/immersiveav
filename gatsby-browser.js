/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// export const onPreRouteUpdate = ({ location, prevLocation }) => {
//   if (location.pathname === "/" && prevLocation === "/") {
//     console.log("already on this route")
//     return
//   }
// }

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    if (prevLocation.pathname === "/" && window.location.pathname === "/") {
      window.location.reload()
      window.scrollTo({
        top: 0,
        behavior: "instant",
      })
      return
    }
    return
  }
}

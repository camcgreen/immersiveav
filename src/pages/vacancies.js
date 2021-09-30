import * as React from "react"
import { Link, graphql } from "gatsby"

const Vacancies = ({ data }) => {
  // const posts = data.allMarkdownRemark.nodes
  const posts = data.allMarkdownRemark.edges

  console.log(posts)
  // console.log(posts[0].node.frontmatter.date)
  return (
    <>
      <p>Vacancies (in development)</p>
    </>
  )
}

export default Vacancies

export const pageQuery = graphql`
  query QueryVacancies {
    allMarkdownRemark(
      filter: { frontmatter: { path: { glob: "vacancies/*" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            date
            featuredImage
            path
            title
          }
        }
      }
    }
  }
`

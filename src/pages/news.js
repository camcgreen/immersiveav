import * as React from "react"
import { Link, graphql } from "gatsby"

const News = ({ data }) => {
  // const posts = data.allMarkdownRemark.nodes
  const posts = data.allMarkdownRemark.edges

  console.log(posts)
  // console.log(posts[0].node.frontmatter.date)
  return (
    <>
      <p>News (in development)</p>
    </>
  )
}

export default News

// export const pageQuery = graphql`
//   allMarkdownRemark(filter: {frontmatter: {path: {glob: "news/*"}}}) {
//     edges {
//       node {
//         html
//         frontmatter {
//           date
//           featuredImage
//           path
//           title
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query QueryNews {
    allMarkdownRemark(filter: { frontmatter: { path: { glob: "news/*" } } }) {
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

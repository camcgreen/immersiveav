import React, { useEffect } from "react"
import "../styles/styles.scss"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []
  let scrollDiv

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    scrollDiv = document.querySelector(".scroll")
  }, [])

  return (
    <nav>
      {/* <div className="scroll"></div> */}
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={e => {
                e.preventDefault()
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
                setTimeout(() => paginate(number), 250)
                // paginate(number)
              }}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

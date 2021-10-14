import React, { useEffect } from "react"
import "../styles/styles.scss"

// import { ScrollTrigger } from "gsap/ScrollTrigger"

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
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
                setTimeout(() => {
                  paginate(number)
                  // ScrollTrigger.refresh()
                }, 250)
                // paginate(number)
              }}
              href="!#"
              // className="page-link"
              className={
                currentPage === number ? "page-link page-selected" : "page-link"
              }
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

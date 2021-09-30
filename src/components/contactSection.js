import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ContactSection = () => {
  return (
    <div className="contact">
      <h1 className="contact__h1">Get in touch</h1>
      <StaticImage
        className="contact__banner"
        src="../images/contact.jpg"
        alt="Contact us"
      />
      <div className="contact__form">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              required
            />
          </p>
          <p>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              required
            />
          </p>
          <p>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company*"
              required
            />
          </p>
          <p>
            {/* <label htmlFor="email">Email</label> */}
            <input type="tel" id="phone" name="phone" placeholder="Phone" />
          </p>
          <p>
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              placeholder="Your message*"
              required
            ></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactSection

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
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Name: <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Company: <input type="text" name="company" required />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Phone: <input type="tel" name="phone" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" required></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactSection

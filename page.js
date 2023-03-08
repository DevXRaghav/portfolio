import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Attached Soggy Fly</title>
        <meta property="og:title" content="Page - Attached Soggy Fly" />
      </Helmet>
      <div className="page-hero">
        <div className="page-container1">
          <h1 className="page-text">Our Expertise:</h1>
          <span>
            As a team, we specialize in cloud computing, public relations, and
            management consulting. Our expertise in cloud technologies allows us
            to provide scalable solutions for businesses of all sizes. We excel
            in crafting compelling messaging and securing media coverage for our
            clients through our public relations services. Additionally, our
            management consulting services provide strategic guidance and
            process improvement to help our clients achieve their goals. At
            [Company Name], we are committed to delivering results-driven
            solutions for our clients.
          </span>
          <div className="page-btn-group">
            <button className="page-button button">Get Started</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="page-image"
        />
      </div>
    </div>
  )
}

export default Page

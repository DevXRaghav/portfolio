import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <a
        href="https://dev.to/dev_raghav"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text4}
      </a>
      <span className="navigation-links-text1">{props.text1}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'About',
  text4: 'Blog',
  text1: 'C  V',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks

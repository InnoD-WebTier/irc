import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hi people
        </h1>
        <p>Welcome to Kitty Land</p>
        <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
        <h3>Supported file types</h3>
        <ul>
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/html/')}>HTML</Link>
          </li>
        </ul>
        // testing things out
        <h2>Contact Us</h2>
        <a href="#"><img src='../img/fb.png' height="50" width="50" /></a>
        <a href="#"><img src='../img/email.png' height="50" width="50" /></a>
      </div>
    )
  }
}


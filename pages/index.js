import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Home extends Component {
  render () {
    return (
      <div className="page page--home">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Home
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
      </div>
    );
  }
}


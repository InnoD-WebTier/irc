@import "Home"; 
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Contact extends Component {
  render () {
    return (
      <div className="page page--contact">
        <Helmet
          title={config.siteTitle}
        />
        <h1 className = "center">
          Contact
        </h1>
        <a href="#"><img src='../img/fb.png' height="50" width="50" /></a>
        <a href="#"><img src='../img/email.png' height="50" width="50" /></a>
      </div>
    );
  }
}


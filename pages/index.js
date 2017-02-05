import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Home extends Component {
  render () {
    return (
      <div 
        className="page page--home"
//         style={{
//           backgroundImage: `url(${prefixLink('/img/logo.jpg')})`
//         }}
      >
        <div className="img--home">
          <img src="/img/logo.jpg"/>
        </div>
        <Helmet
          title={config.siteTitle}
        />
      </div>
    );
  }
}

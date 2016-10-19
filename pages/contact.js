import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
        <div className="contact--center">
          <h1>
            Contact
          </h1>
          <a href="#" target="_blank">
            <FontAwesome
              className="media--icon fb"
              name="facebook"
            /> 
          </a>
          <a href="#" target="_blank">
            <FontAwesome
              className="media--icon mail"
              name="envelope"
            /> 
          </a>   
        </div>   
      </div>
    );
  }
}


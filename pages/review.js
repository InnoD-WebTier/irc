import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Review extends Component {
  render () {
    return (
      <div className="page page--review">
        <Helmet
          title={config.siteTitle}
        />
        <div className="page__title">
          IRC Review
        </div>
        <div className="page__content">
          <div className="page__content__section">
            <div className="page__heading">Application Guidelines</div>
          </div>
          <div className="page__content__section">
            <div className="page__heading">Archives</div>
          </div>
        </div>
      </div>
    );
  }
}


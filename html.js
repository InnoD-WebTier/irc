import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

export default class Html extends Component {
  render() {
    const head = Helmet.rewind();

    const css = process.env.NODE_ENV === 'production' ? (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css')
        }}
      />
    ) : null;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Open+Sans"
            rel="stylesheet"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{
              __html: this.props.body
            }}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  body: PropTypes.string
};


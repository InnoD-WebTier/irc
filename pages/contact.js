import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
  render () {
    return (
      <div className="page page--contact">
        <Helmet
          title={config.siteTitle}
        />
      
        <div className="page__title">
            Contact
        </div>

        <div className="page__content">
          <div className="col col--1">International Relations Council </div>
          <div className="col col--2">
            <a href="#" target="_blank">
              <FontAwesome
                className="media__icon fb"
                name="facebook"
              /> 
            </a>

            <a href="mailto:ircofberkeley@gmail.com" target="_blank">
              <FontAwesome
                className="media__icon mail"
                name="envelope"
              /> 
            </a>  
            </div>

            <div className="col col--1">Amnesty International</div>
            <div className="col col--2">
             <a href="#" target="_blank">
              <FontAwesome
                className="media__icon fb"
                name="facebook"
              /> 
              </a>

              <a href="mailto:ucbamnesty@gmail.com" target="_blank">
                <FontAwesome
                  className="media__icon mail"
                  name="envelope"
                /> 
              </a> 
            </div>
            <br />

            <div className="col col--1">Berkeley Model United Nations</div>
            <div className="col col--2">
              <a href="#" target="_blank">
                <FontAwesome
                  className="media__icon fb"
                  name="facebook"
                /> 
              </a>

              <a href="mailto:info@bmun.org" target="_blank">
                <FontAwesome
                  className="media__icon mail"
                  name="envelope"
                /> 
              </a>
            </div> 
            <br />

            <div className="col col--1">Delta Phi Epsilon</div> 
            <div className="col col--2"> 
              <a href="#" target="_blank">
                <FontAwesome
                  className="media__icon fb"
                  name="facebook"
                /> 
              </a>

              <a href="mailto:berkeleydpe@gmail.com" target="_blank">
                <FontAwesome
                  className="media__icon mail"
                  name="envelope"
                /> 
              </a> 
            </div>
            <br />

            <div className="col col--1">Sigma Iota Rho</div>
            <div className="col col--2">
              <a href="#" target="_blank">
                <FontAwesome
                  className="media__icon fb"
                  name="facebook"
                /> 
              </a>

              <a href="mailto:sigmaiotarho.berkeley@gmail.com" target="_blank">
                <FontAwesome
                  className="media__icon mail"
                  name="envelope"
                /> 
              </a>
            </div>
            <br />

            <div className="col col--1">UC Berkeley Model United Nations</div>
            <div className="col col--2">
              <a href="#" target="_blank">
                <FontAwesome
                  className="media__icon fb"
                  name="facebook"
                /> 
              </a>

              <a href="mailto:president@ucbmun.org" target="_blank">
                <FontAwesome
                  className="media__icon mail"
                  name="envelope"
                /> 
              </a>
            </div> 
          </div> 
        </div>   
    );
  }
}


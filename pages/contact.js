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
          <div className="contact__name">International Relations Council </div>
          <div className="contact__icons">
            <a href="#" target="_blank">
              <FontAwesome
                className="media__icon circle fb"
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

            <div className="contact__name">Amnesty International</div>
            <div className="contact__icons">
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
     

            <div className="contact__name">Berkeley Model United Nations</div>
            <div className="contact__icons">
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

            <div className="contact__name">Delta Phi Epsilon</div> 
            <div className="contact__icons"> 
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

            <div className="contact__name">Sigma Iota Rho</div>
            <div className="contact__icons">
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

            <div className="contact__name">UC Berkeley Model United Nations</div>
            <div className="contact__icons">
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


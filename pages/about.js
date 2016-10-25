import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          About
        </h1>
        <h2 className="section__title">
          History
        </h2>
        <div className="section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            In, soluta molestias. Ullam cupiditate, minima rem. Sunt, aut quidem. 
            Provident veniam, eos quae optio perspiciatis deserunt dolorum dignissimos recusandae ea cumque 
            molestiae illum dolore ipsam nam illo consequatur, omnis, praesentium excepturi soluta voluptate vero id nesciunt.
            Nobis cupiditate fuga necessitatibus corrupti quo ipsam porro numquam, minus blanditiis modi qui itaque corporis. 
            Et mollitia dolores quae quia architecto, distinctio iure, magni, blanditiis numquam voluptatibus cum explicabo doloribus 
            beatae assumenda tenetur quo quos eligendi pariatur quis obcaecati amet quas consectetur! Perferendis dicta eum, totam 
            ad nulla impedit nobis ipsam quod officia eius optio!
          </p>
        </div>


        <h2 className="section__title">
          Organizations
        </h2>
        <div className="organizations">
          <h3>Amnesty International</h3>
          <p>
            Founded in London in 1961, Amnesty International is a Nobel Prize-winning grassroots activist organization with over
            2.8 million members worldwide. Amnesty International undertakes research and action focused on preventing and ending 
            grave abuses of the rights to physical and mental integrity, freedom of conscience and expression, and freedom from 
            discrimination, within the context of its work to promote all human rights. The UC Berkeley chapter of Amnesty International
            works to promote human rights within our collegiate student body through advocacy, education, action, and service. 
            Our past events have included peaceful public demonstrations, film festivals, speakers, letter writing campaigns, and more!
            </p>

          <h3>Berkeley Model United Nations (BMUN)</h3>
          <p>
            Berkeley Model United Nations is a student run organization on the UC Berkeley campus dedicated to continuing its six decades of excellence as the world’s premier 
            — and very first — United Nations simulation. Every March, over 1,600 high school students from all over the world come to Berkeley to participate in Berkeley Model United Nations. 
            Entering its 65th session, BMUN’s mission is to spread awareness of international issues and the spirit of diplomacy through UN simulations. 
            We also aim to create an educational experience for high school student, to help them realize their potential in public speaking as well as policy debate. We do this by serving 
            as head chairs on a diverse group of committees in which we help to facilitate delegate education through substantive diplomatic debate.
          </p>
          <h3>Delta Phi Epsilon</h3>
          <p>
            Delta Phi Epsilon is Cals' only co-ed professional foreign service and international relations fraternity. 
            We strive to educate our members on current events and international affairs, engage them in the international 
            community through philanthropy and service and allow them to explore and prepare for careers in international affairs.
          </p>
          <h3>Sigma Iota Rho</h3>
          <p>
            Sigma Iota Rho is a national Honors Society for International Studies founded in 1984 and headquartered at the University of Pennsylvania. 
            Established at UC Berkeley in the Fall of 2012, our chapter offers opportunities to closely interact with fellow IAS students, alumni, 
            and faculty, attend speaking and professional development events, and the opportunity to be published in the national peer-reviewed Journal
             of International Relations. We were recently awarded the Chapter Spotlight Award from the National Organization, which is given to the chapter 
             that best exemplifies passion for, engagement with, and academic excellence in international studies.
          </p>
          <h3>UC Berkeley Model United Nations (UCBMUN)</h3>
          <p>
            UC Berkeley Model United Nations (UCBMUN) engages Berkeley students in debate and discourse on contemporary and historical topics relevant
            to international relations, diplomacy, and the United Nations. Students act as delegates representing a country,
            NGO, or historical figure as they work to solve international issues through a combination of debate and negotiation. 
            Members of UCBMUN are able to improve upon their public speaking, creative problem solving, and interpersonal skills
            while learning about a wide range of historical and current foreign affairs. UCBMUN is the official intercollegiate 
            team that represents UC Berkeley at eight conferences across the US annually; this travel team is one of the most 
            competitive and highest ranked teams in North America. In addition, UCBMUN hosts an annual collegiate conference 
            in San Francisco every March, attended by 600 delegates from 45 schools around the world.
          </p>
        </div>

        <center><h2>Leadership</h2></center>
        <div className="grid">
          <div className="col">
            <img src="/img/grayson.jpg" />
          </div>
          <div className="col">
            <img src="/img/grayson.jpg" />
          </div>
          <div className="col">
            <img src="/img/grayson.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

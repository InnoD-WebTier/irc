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

        <center><h2>History</h2></center>
        <div className="history">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, soluta molestias. Ullam cupiditate, minima rem. Sunt, aut quidem. Provident veniam, eos quae optio perspiciatis deserunt dolorum dignissimos recusandae ea cumque molestiae illum dolore ipsam nam illo consequatur, omnis, praesentium excepturi soluta voluptate vero id nesciunt. Nobis cupiditate fuga necessitatibus corrupti quo ipsam porro numquam, minus blanditiis modi qui itaque corporis. Et mollitia dolores quae quia architecto, distinctio iure, magni, blanditiis numquam voluptatibus cum explicabo doloribus beatae assumenda tenetur quo quos eligendi pariatur quis obcaecati amet quas consectetur! Perferendis dicta eum, totam ad nulla impedit nobis ipsam quod officia eius optio!</p>
        </div>

        <center><h2>Organizations</h2></center>
        <div className="organizations">
          <h3>Amnesty International</h3>
          <p>Founded in London in 1961, Amnesty International is a Nobel Prize-winning grassroots activist organization with over 2.8 million members worldwide. Amnesty International undertakes research and action focused on preventing and ending grave abuses of the rights to physical and mental integrity, freedom of conscience and expression, and freedom from discrimination, within the context of its work to promote all human rights. The UC Berkeley chapter of Amnesty International works to promote human rights within our collegiate student body through advocacy, education, action, and service. Our past events have included peaceful public demonstrations, film festivals, speakers, letter writing campaigns, and more!</p>

          <h3>Berkeley Model United Nations (BMUN)</h3>
          <p>Berkeley Model United Nations is a student run organization on the UC Berkeley campus dedicated to continuing its six decades of excellence as the world’s premier — and very first — United Nations simulation. Every March, over 1,600 high school students from all over the world come to Berkeley to participate in Berkeley Model United Nations. Entering its 65th session, BMUN’s mission is to spread awareness of international issues and the spirit of diplomacy through UN simulations. We also aim to create an educational experience for high school student, to help them realize their potential in public speaking as well as policy debate. We do this by serving as head chairs on a diverse group of committees in which we help to facilitate delegate education through substantive diplomatic debate.</p>
          <h3>Delta Phi Epsilon</h3>
          <p>Delta Phi Epsilon is Cals' only co-ed professional foreign service and international relations fraternity. We strive to educate our members on current events and international affairs, engage them in the international community through philanthropy and service and allow them to explore and prepare for careers in international affairs.</p>
          <h3>Sigma Iota Rho</h3>
          <p>Sigma Iota Rho is a national Honors Society for International Studies founded in 1984 and headquartered at the University of Pennsylvania. Established at UC Berkeley in the Fall of 2012, our chapter offers opportunities to closely interact with fellow IAS students, alumni, and faculty, attend speaking and professional development events, and the opportunity to be published in the national peer-reviewed Journal of International Relations. We were recently awarded the Chapter Spotlight Award from the National Organization, which is given to the chapter that best exemplifies passion for, engagement with, and academic excellence in international studies.</p>
          <h3>UC Berkeley Model United Nations (UCBMUN)</h3>
          <p>UC Berkeley Model United Nations (UCBMUN) engages Berkeley students in debate and discourse on contemporary and historical topics relevant to international relations, diplomacy, and the United Nations. Students act as delegates representing a country, NGO, or historical figure as they work to solve international issues through a combination of debate and negotiation. Members of UCBMUN are able to improve upon their public speaking, creative problem solving, and interpersonal skills while learning about a wide range of historical and current foreign affairs. UCBMUN is the official intercollegiate team that represents UC Berkeley at eight conferences across the US annually; this travel team is one of the most competitive and highest ranked teams in North America. In addition, UCBMUN hosts an annual collegiate conference in San Francisco every March, attended by 600 delegates from 45 schools around the world.</p>
        </div>

        <center><h2>Leadership</h2></center>
        <div className="leadership--grid--1">

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Spandana (Spandi) Singh is a fourth year at Cal double majoring in Development Studies and Media Studies, minoring in Global Poverty & Practice and completing the Certificate in Technology Entrepreneurship. Originally from India, Spandi's interests include global health, financial inclusion, entrepreneurship and tech policy. Spandi has previously interned at UNICEF and the World Bank Group, and is a co-founder of two social enterprises, Sira Corporation and REcharge Initiative. She is currently a Public Policy Fellow at Twitter in San Francisco.</p>
          </div>

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Shayda Azamian is a third-year Berkeley student and the Director of Organizational Affairs for the IR Council. Having completed her B.A. in Peace and Conflict Studies, she is currently looking into career opportunities in various internationally-related fields, such as policy, conflict resolution, and institutional operations. She's lived in Santa Clarita (Southern California) all of her pre-college life, but in recent years has traveled abroad to Egypt, Jordan, and Kuwait! In free time, you can find her learning new languages, adventuring, analyzing films, casually strategizing solutions to world issues, and singing Penn Masala songs.</p>
          </div>

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Grayson Dimick is a fourth year undergraduate, double majoring in Political Science and History with a minor in Public Policy. Originally from the small town of Sebastopol, CA (not to be confused with Putin's favorite town in Crimea), she plans to attend law school after graduation and focus on a career in public service. Grayson’s time at Berkeley is currently split between her role as UC Berkeley Model United Nations’ president and as a research assistant at the Nicholas C. Petris Center for Healthcare Markets and Consumer Welfare. She is passionate about health policy, increasing female representation in politics, and US foreign policy towards the Global South in the Cold War.  </p>
          </div>
        </div>

        <div className="leadership--grid--2">

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Kevin Fulgham is Delta Phi Epsilon’s representative to the International Relations Council at Berkeley. He is a fifth year pursuing a Dual B.A. in Political Science and Media Studies with a minor in Public Policy and pledged Delta Phi Epsilon in Spring 2014. He is especially focused on issues of good governance, anti-corruption and institution building in the Asia-Pacific and North Africa. A native of the San Francisco-Bay Area, he is incredibly fortunate to follow in his grandfather’s footsteps and live in UC Berkeley’s International House. When, he isn’t constantly checking foreign policy twitter, Kevin is usually found watching and following every sport imaginable.</p>
          </div>          


          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Patrick Babajanian is a fourth-year undergraduate student at Cal, majoring in Peace and Conflict Studies with a concentration in Conflict Resolution. He currently serves as Outreach Officer for Amnesty International at Berkeley and represents the organization on the IRC. After graduation, Patrick hopes to attend law school, with an interest in pursuing a career in international human rights law, and also considering getting involved in politics. Originally from Los Angeles, Patrick constantly finds himself torn between his allegiances to both SoCal and NorCal and has resolved to take the diplomatic approach and agree that each is great in its own way. In his spare time, Patrick enjoys binge-watching historical dramas on Netflix, attending Model UN conferences, taking Sporcle quizzes, fencing, and reading in cafes.</p>
          </div>

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Alexander Wilfert is a 2nd year student who grew up in London, UK majoring in Environmental Economics and Policy and History. Growing up in the UK with a Lebanese-American mother and German father whilst attending an International school, Alex saw how truly diverse and global our world is. With that globalised world comes global challenges. Whether it’s immigration, poverty, war or climate change, our world continues to face issues that we as an international community must face. And that is what interests Alex so much about International Relations. How do we face these issues together? In Alex's free time, he loves watching and supporting Cal Athletics, is an avid football (or soccer) fan (Come on you Spurs) and enjoys watching any show on Netflix. </p>
          </div>
        </div>

        <div className="leadership--grid--3">


          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Aurora Ling is a third-year UC Berkeley student majoring in Peace and Conflict Studies with a concentration in Human Rights. She is the External Vice President of Sigma Iota Rho – UC Berkeley Chapter. She is also the Director and Editor-in-Chief of The International Relations Review of Berkeley, the official journal of the IR Council. Aurora has lived in 9 different cities, including ones in China and Canada. She recently traveled extensively through Europe and studied abroad with the Gilman Scholarship at the London School of Economics (LSE). She now works as an intern with the Global South Unit at the LSE. Her favorite things include learning languages, reading good books, lights, socks, and ice cream. Aurora became a Christian her second year of college, and now spends most of her time with her church doing ministry. Her goal in life is to champion human rights, be a professor, and continue being a minister of the gospel.</p>
          </div>

          <div className = "col">
            <img src="http://lorempixel.com/250/250" />
            <p>Austin Smith is a second-year Berkeley student and is an editor for the International Relations Review. He's intended to major in Political Science and is planning to attend law school after college. He's lived in Huntington Beach (Southern California) all his pre-college life. In free time, you can find him analyzing political speeches, watching YouTube, going to new places, and rooting for Cal athletics. </p>
          </div>

           <div className = "col">
          </div>

          </div>

          

          
      </div>
    );
  }
}

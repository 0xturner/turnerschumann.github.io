import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const projects = [
  {
    title: `REFLECT`,
    description: `Reflect is a personal wellness application designed for users to find correlations between their daily mood, computer productivity, and activities.`,
    imgSrc: `https://github.com/turnerschumann/turnerschumann.github.io/blob/working/src/images/reflect-mockup.png?raw=true`,
    link: `https://github.com/turnerschumann/reflect`,
    device: `computer`,
  },
  {
    title: `POLLR`,
    description: `Pollr is a decision-making app that creates polls for a group to collectively make a democratic decision.`,
    imgSrc: `https://github.com/turnerschumann/turnerschumann.github.io/blob/working/src/images/pollr-mockup.png?raw=true`,
    link: `https://github.com/turnerschumann/decision-maker`,
    device: `mobile`,
  },
  {
    title: `CHATTY`,
    description: `Chatty was built to replicate modern chat application like Slack and Facebook Messenger. By utilizing websockets, users are able to converse in real-time.`,
    imgSrc: `https://github.com/turnerschumann/turnerschumann.github.io/blob/working/src/images/chatty-mockup.png?raw=true`,
    link: `https://github.com/turnerschumann/chatty`,
    device: `computer`,
  },
  {
    title: `TWEETER`,
    description: `Tweeter is a simple, single-page Twitter clone that uses jQuery, HTML5 and CSS.`,
    imgSrc: `https://github.com/turnerschumann/turnerschumann.github.io/blob/working/src/images/tweeter-mockup.png?raw=true`,
    link: `https://github.com/turnerschumann/tweeter`,
    device: `computer`,
  },
];

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Portfolio" />
        <div class="portfolio-content">
          <h1 class='main-header'>PORTFOLIO</h1>
          <h2 class='main-tagline'>Selected Projects</h2>
          <p class='main-description'>From simple Wordpress websites to complex dashboards, data visualisations, real-time chat and SaaS single page web applications—I have the skills to deliver elegant, user-friendly solutions.</p>
          <hr width="15%" style={{ borderTop: `1px solid white`, background: `white`, }}></hr>
        </div>
        <div class="portfolio">
          {projects.map(element => {
            return (
              <Project
                title={element.title}
                description={element.description}
                imgSrc={!this.state.mobile ? element.imgSrc : ``}
                link={element.link}
                bullets={element.bullets}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default PortfolioPage
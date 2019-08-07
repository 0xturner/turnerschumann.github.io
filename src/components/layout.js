/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components";

// import Image from "../components/image"
// import Header from "./header"
import "./layout.css"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #838383;
  letter-spacing: 2px;
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #333333;
    padding-bottom: 10px;
    border-bottom: 2px solid #333333;
    transition: color 0.6s ease, border-bottom 0.6s ease;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div id='nav-sider'
        style={{
          height: `100 %`, /* Full-height: remove this if you want "auto" height */
          width: `280px`, /* Set the width of the sidebar */
          position: `fixed`, /* Fixed Sidebar (stay in place on scroll) */
          zIndex: `1`, /* Stay on top */
          top: `0`, /* Stay at the top */
          left: `0`,
          bottom: `0`,
          backgroundColor: `#FFFFFF`,
          overflowX: `hidden`, /* Disable horizontal scroll */
          padding: `30px 40px 5px 40px`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <div id='name-header'>
            <StyledLink to="/"
              style={{
                color: `#333333`,
                paddingBottom: `0px`,
                borderBottom: `0px solid transparent`,
              }}
            >
              Turner.
            </StyledLink>
          </div>
          <p id='profession'>Full-stack developer</p>
          <p id='profession'>UI/UX design</p>
        </div>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="/portfolio/">PORTFOLIO</StyledLink>
            </li>
            <li>
              <a class='menu-item' href="https://drive.google.com/file/d/1m5gbs9ysxyJw7sui2-L0ABEq9fIvzknZ/view?usp=sharing">RESUME</a>
            </li>
            <li>
              <a class='menu-item' href="mailto:turnerschumann@gmail.com">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div id='nav-footer'>
          <p>For enquiries or questions, drop me a line at:{"\n"}
            <a
              style={{
                textDecoration: `none`,
                color: `black`,
              }}
              href="mailto:turnerschumann@gmail.com?subject=Mail%20From%20Site&body=Hi%20Turner,">turnerschumann@gmail.com
            </a>
          </p>
          <ul id="social-icons">
            <a href="https://github.com/turnerschumann">
              <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="Github" width="25px" height="25px" />
            </a>
            <a href="https://www.linkedin.com/in/turnerschumann/">
              <img src="https://image.flaticon.com/icons/svg/8/8707.svg" alt="Linkedin" width="25px" height="25px" />
            </a>
            <a href="https://www.instagram.com/turnerschumann">
              <img src="https://image.flaticon.com/icons/svg/1384/1384015.svg" alt="Instagram" width="25px" height="25px" />
            </a>
          </ul>
        </div>
      </div>
      <div
      >
        <main
          style={{
            marginLeft: `280px`, /* Same as the width of the sidebar */
            padding: `0px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-end`,
          }}
        >
          {children}
        </main>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

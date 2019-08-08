import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #626262;
  letter-spacing: 2px;
  padding-bottom: 10px;
  border-bottom: 2px solid #626262;
  display: inline-block

  &:hover {
    color: #333333;
    padding-bottom: 10px;
    border-bottom: 2px solid #333333;
    transition: color 0.6s ease, border-bottom 0.6s ease;
  }
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="main-content">
      <h1 class="main-header">HI, I'M TURNER,</h1>
      <h2 class="main-tagline">I help companies deliver exceptional digital experiences</h2>
      <p class="main-description">I’m a fullstack developer and UI specialist with a broad range of skills and expertise in all web development related fields.</p>
      <div>
        <StyledLink to="/portfolio/">SEE MY WORK</StyledLink>
      </div>
    </div>
  </Layout>
)

export default IndexPage

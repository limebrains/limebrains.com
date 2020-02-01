import React from 'react'

import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { SectionHeading } from '../components/heading'

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PlaintextTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.seo.title} />
    <LayoutWrapper>
      <SectionHeading title={data.markdownRemark.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </LayoutWrapper>
  </Layout>
);

export default PlaintextTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subtitle
        seo {
          title
          description
          noindex
        }
      }
    }
  }
`

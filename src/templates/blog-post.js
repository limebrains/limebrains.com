import * as React from 'react'
import * as _ from 'lodash';

import styled from 'styled-components'
import { graphql } from "gatsby";
import SEO from '../components/seo';
import Layout from '../components/layout';
import { SectionHeading } from '../components/heading';

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`


const PlaintextTemplate = ({data}) => (
  <Layout>
    <SEO title={_.get(data, 'markdownRemark.frontmatter.seo.title')}/>
    <LayoutWrapper>
      <SectionHeading title={_.get(data, 'markdownRemark.frontmatter.title')}/>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
    </LayoutWrapper>
  </Layout>
)

export default PlaintextTemplate

export const query = graphql`
  query PlaintextTemplateQuery($slug: String!) {
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
        date
        seo {
          title
          description
          noindex
        }
      }
    }
  }
`

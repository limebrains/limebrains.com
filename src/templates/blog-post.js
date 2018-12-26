import * as React from 'react'
import * as _ from 'lodash';
import Disqus from 'disqus-react';
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

const PlaintextTemplate = ({data}) => {
  const disqusShortname = data.markdownRemark.fields.slug;
  const title = _.get(data, 'markdownRemark.frontmatter.title')
  const disqusConfig = {
    url: `${data.site.siteMetadata.url}${data.markdownRemark.fields.slug}`,
    identifier: data.markdownRemark.fields.slug,
    title,
  };
  return (
    <Layout>
      <SEO title={_.get(data, 'markdownRemark.frontmatter.seo.title')}/>
      <LayoutWrapper>
        <SectionHeading title={title}/>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>

        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          Comments
        </Disqus.CommentCount>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
      </LayoutWrapper>
    </Layout>
  )
}

export default PlaintextTemplate

export const query = graphql`
  query PlaintextTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        url
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
      fields {
        slug
      }
    }
  }
`

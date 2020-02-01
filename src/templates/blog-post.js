import * as React from 'react'
import * as _ from 'lodash'
import Disqus from 'disqus-react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Divider } from '../components/divider'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { SectionHeading } from '../components/heading'
import { Box, FlexBlog } from '../components/flex';
import { Fade } from 'react-reveal';
import { ClientCard, PersonCard } from '../components/card';

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const PlaintextTemplate = ({data}) => {
  const disqusShortname = 'limebrains'
  const title = _.get(data, 'markdownRemark.frontmatter.title')
  const disqusConfig = {
    url: `${data.site.siteMetadata.url}${data.markdownRemark.fields.slug}`,
    identifier: data.markdownRemark.fields.slug,
    title,
  }
  return (
    <Layout>
      <SEO title={_.get(data, 'markdownRemark.frontmatter.seo.title')}/>
      <LayoutWrapper>
        <SectionHeading title={title}/>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>

        <Divider/>

        <FlexBlog mb={'3rem'} mt={'4rem'}>
          <Box>
            <Fade>
              <ClientCard/>
            </Fade>
          </Box>

          <Box>
            <Fade>
              <PersonCard/>
            </Fade>
          </Box>
        </FlexBlog>

        <Divider/>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
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

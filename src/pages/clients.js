import React from 'react'
import * as _ from 'lodash'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import { ClientCard, PersonCard } from '../components/card'
import Layout from '../components/layout/index'
import { FlexBlog, Box } from '../components/flex'
import { Fade } from 'react-reveal';


const Section = styled.div`
  font-size: 30px;
  color: #8f9297;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 10%;
  margin-left: 10%;
  border-bottom: 1px solid #bec1c6;
  padding-bottom: 1rem;
`;


const Clients = ({data}) => (
  <Layout>
    <SEO title="Clients"/>

    <Box mb={'3rem'}>
      <Section>
        Clients
      </Section>
      <FlexBlog>
        {data.allMarkdownRemark.edges.map(post => (
          <Box key={post.node.frontmatter.title}>
            <Fade>
              <ClientCard
                to={post.node.fields.slug}
                imgSrc={_.get(post, 'node.frontmatter.image')}
                name={_.get(post, 'node.frontmatter.title')}
                postion={_.get(post, 'node.frontmatter.website')}
                motto={_.get(post, 'node.frontmatter.motto')}
              />
            </Fade>
          </Box>
        ))}

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

    </Box>
  </Layout>
)

export default Clients

export const query = graphql`
    query {
        allMarkdownRemark(filter: { fields: { layout: { eq: "client" } } }) {
            edges {
                node {
                    tableOfContents
                    timeToRead
                    frontmatter {
                        title
                        subtitle
                        description
                        website
                        motto
                        date
                        tags
                        image
                        seo {
                            title
                            description
                            noindex
                        }
                    }
                    fields {
                        slug
                        layout
                    }
                }
            }
        }
    }
`;

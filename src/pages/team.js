import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout/index'
import { FlexBlog, Box } from '../components/flex'
import { Fade } from 'react-reveal';
import { ClientCard, PersonCard } from '../components/card';

const Section = styled.div`
  font-size: 30px;
  color: #8f9297;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
  border-bottom: 1px solid #bec1c6;
  padding-bottom: 0.5rem;
`;


const Team = ({data}) => (
  <Layout>
    <SEO title="Team"/>

    <Box mb={'3rem'}>
      <Fade>
        <Section>
          Leadership
        </Section>
      </Fade>
      <FlexBlog>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.leader)
          .sort((a, b) => a.node.frontmatter.order < b.node.frontmatter.order ? -1 : 1)
          .map(post => (
            <Box key={post.node.frontmatter.title}>
              <Fade>
                <PersonCard
                  to={post.node.fields.slug}
                  imgSrc={post.node.frontmatter.image}
                  name={post.node.frontmatter.title}
                  postion={post.node.frontmatter.position}
                  motto={post.node.frontmatter.motto}
                />
              </Fade>
            </Box>
          ))}
      </FlexBlog>

      <Fade>
        <Section>
          Developers
        </Section>
      </Fade>

      <FlexBlog>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.developer)
          .sort((a, b) => a.node.frontmatter.order < b.node.frontmatter.order ? 1 : -1)
          .map(post => (
            <Fade>
              <Box key={post.node.frontmatter.title}>
                <PersonCard
                  to={post.node.fields.slug}
                  imgSrc={post.node.frontmatter.image}
                  name={post.node.frontmatter.title}
                  postion={post.node.frontmatter.position}
                  motto={post.node.frontmatter.motto}
                />
              </Box>
            </Fade>
          ))
        }

        <Fade>
          <Box>
            <PersonCard/>
          </Box>

          <Box>
            <ClientCard/>
          </Box>
        </Fade>
      </FlexBlog>


      <Fade>
        <Section>
          Interns
        </Section>
      </Fade>

      <FlexBlog>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.intern)
          .sort((a, b) => a.node.frontmatter.order < b.node.frontmatter.order ? -1 : 1)
          .map(post => (
            <Fade>
              <Box key={post.node.frontmatter.title}>
                <PersonCard
                  to={post.node.fields.slug}
                  imgSrc={post.node.frontmatter.image}
                  name={post.node.frontmatter.title}
                  postion={post.node.frontmatter.position}
                  motto={post.node.frontmatter.motto}
                />
              </Box>
            </Fade>
          ))
        }

        <Fade>
          <Box>
            <PersonCard/>
          </Box>

          <Box>
            <ClientCard/>
          </Box>
        </Fade>
      </FlexBlog>

    </Box>
  </Layout>
)

export default Team

export const query = graphql`
    query {
        allMarkdownRemark(filter: { fields: { layout: { eq: "person" } } }) {
            edges {
                node {
                    tableOfContents
                    timeToRead
                    frontmatter {
                        title
                        subtitle

                        leader
                        developer

                        order
                        position
                        motto
                        date
                        tags
                        image
                        image_wide
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

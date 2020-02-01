import React from 'react'
import * as _ from 'lodash'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import { Link } from '../components/link'
import { Card } from '../components/card'
import { Img } from '../components/img'
import Layout from '../components/layout/index'
import { FlexBlog, Box } from '../components/flex'
import { Fade } from 'react-reveal';

const Row = styled.div`
  color: #8f9297;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid #bec1c6;
  padding-bottom: 1rem;
`;

const Name = styled.div`
  
`;

const Position = styled.div`
  font-size: 12px;
`;

const Motto = styled.div`
  padding: 2rem;
  text-align: center;
  color: #8f9297;
  font-style: italic;
`;

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
                <Card autoSize>
                  <Link to={post.node.fields.slug}>
                    <Img src={_.get(post, 'node.frontmatter.image')} responsive={true}/>
                    <Row>
                      <Name>{_.get(post, 'node.frontmatter.title')}</Name>
                      <Position>{_.get(post, 'node.frontmatter.position')}</Position>
                    </Row>
                    <Motto>{_.get(post, 'node.frontmatter.motto')}</Motto>
                  </Link>
                </Card>
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
                <Card autoSize>
                  <Link to={post.node.fields.slug}>
                    <Img src={_.get(post, 'node.frontmatter.image')}/>
                    <Row>
                      <Name>{_.get(post, 'node.frontmatter.title')}</Name>
                      <Position>{_.get(post, 'node.frontmatter.position')}</Position>
                    </Row>
                    <Motto>{_.get(post, 'node.frontmatter.motto')}</Motto>
                  </Link>
                </Card>
              </Box>
            </Fade>
          ))
        }

        <Fade>
          <Box>
            <Card>
              <a href={'https://drift.me/mail12/meeting'} style={{textDecoration: 'none'}}>
                <Img src={'https://i.imgur.com/NM9LdJV.jpg'}/>
                <Row>
                  <Name>{'Wanna join?'}</Name>
                  <Position>{'your new title'}</Position>
                </Row>
                <Motto>{'Join us!'}</Motto>
              </a>
            </Card>
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
                <Card autoSize>
                  <Link to={post.node.fields.slug}>
                    <Img src={_.get(post, 'node.frontmatter.image')}/>
                    <Row>
                      <Name>{_.get(post, 'node.frontmatter.title')}</Name>
                      <Position>{_.get(post, 'node.frontmatter.position')}</Position>
                    </Row>
                    <Motto>{_.get(post, 'node.frontmatter.motto')}</Motto>
                  </Link>
                </Card>
              </Box>
            </Fade>
          ))
        }

        <Fade>
          <Box>
            <Card>
              <a href={'https://drift.me/mail12/meeting'} style={{textDecoration: 'none'}}>
                <Img src={'https://i.imgur.com/NM9LdJV.jpg'}/>
                <Row>
                  <Name>{'Wanna join?'}</Name>
                  <Position>{'your new title'}</Position>
                </Row>
                <Motto>{'Join us!'}</Motto>
              </a>
            </Card>
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
                        intern
                        
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

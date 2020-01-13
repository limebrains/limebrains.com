import * as React from 'react'
import * as _ from 'lodash'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { SectionHeading } from '../components/heading'
import { Img } from '../components/img'
import { Box } from '../components/flex'
import Bar from '../components/showhidebar'
import { mobileLandscape } from '../components/responsive'
import Carousel from '../components/carousel'

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Row = styled.div`
  color: #8f9297;
  color: #8f9297;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
`

const Name = styled.div`
  
`

const Position = styled.div`
  font-size: 12px;
`

const Section = styled.div`
  font-size: 30px;
  color: #8f9297;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Motto = styled.div`
  padding: 2rem;
  text-align: center;
  color: #c2bebe;
  font-style: italic;
  font-size: 60px;

  @media (max-width: ${mobileLandscape}px) {
    font-size: 30px;
  }
`

const PlaintextTemplate = ({ data }) => {
  const title = _.get(data, 'markdownRemark.frontmatter.title')
  const person = _.get(data, 'markdownRemark.frontmatter')
  const projects = _.get(data, 'allMarkdownRemark.edges').map(edge => ({
    ...edge.node.frontmatter,
    link: edge.node.fields.slug
  }))

  return (
    <Layout>
      <SEO title={_.get(person, 'seo.title')}/>
      <LayoutWrapper>

        <Box>
          <SectionHeading title={`${title} - ${_.get(person, 'position')}`}/>
          <Img src={_.get(person, 'image_wide')} responsive/>
        </Box>

        <Box mt={'3rem'}/>
        <Motto>{_.get(person, 'motto')}</Motto>

        <Box mt={'3rem'}/>

        <Section>
          Areas of expertise
        </Section>

        <Box mt={'3rem'}/>
        <Bar
          header="Server Administration"
          myIndex="0"
          content="Experience with the core AWS services. Good background in Linux/Unix administration."
        />
        <Bar
          header="Backend Development"
          myIndex="1"
          content="Python, Django/REST, Pyramid, PostgreSQL, MySQL, MongoDB, ElasticSearch, AWS, serverless."
        />
        <Bar
          header="Frontend Development"
          myIndex="2"
          content="ReactJS, Angular, ES6, Webpack, Redux, TypeScript"
        />
        <Bar
          header="Test Driven Development"
          myIndex="3"
          content="Unit tests, E2E tests, watchers on production"
        />
        <Box mt={'3rem'}/>

        <Section>
          Some Projects
        </Section>

        <Carousel data={projects}/>
      </LayoutWrapper>
    </Layout>
  )
}

export default PlaintextTemplate

export const query = graphql`
    query  PersonTemplateQuery($slug: String!) {
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
          image
          image_wide
          position
          motto
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
      allMarkdownRemark(filter: { fields: { layout: { eq: "project" } } }) {
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
`

const Slides = [
  {
    image:
      'https://static.pexels.com/photos/7055/desk-computer-imac-home-large.jpg',
    header: 'How to create alert in osx?',
    subtitle: 'Just one easy step!',
    date: 'September 20 2019',
    link: '/blog/2017-10-20T02:00-alert-in-osx/',
  },
  {
    image: 'https://i.ytimg.com/vi/HWn85tjFMIQ/maxresdefault.jpg',
    header: 'Add a progress meter to your loops in a second',
    subtitle: 'It couldn\'t be easier!',
    date: 'September 18 2019',
    link: '/blog/2017-10-20T00:00-progress-bar/',
  },
  {
    image:
      'https://c.pxhere.com/photos/b3/37/coding_computer_hacker_hacking_html_programmer_programming_script-1366057.jpg!d',
    header: 'How to easily find biggest files?',
    subtitle: 'Press button below to find out!',
    date: 'September 19 2019',
    link: '/blog/2017-10-20T01:00-disk-usage/',
  },
]
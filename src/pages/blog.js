import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Card } from '../components/card'
import { Link } from '../components/link'
import { Img } from '../components/img'
import { FlexBlog, Box } from '../components/flex'

import Carousel from '../components/carousel'

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <Carousel data={Slides} />

    <Box m={3}>
      <FlexBlog>
        {data.allMarkdownRemark.edges.map(post => (
          <Box key={post.node.frontmatter.title}>
            <Link to={post.node.fields.slug}>
              <Card title={post.node.frontmatter.title}>
                <Img src={post.node.frontmatter.image} />
              </Card>
            </Link>
          </Box>
        ))}
      </FlexBlog>
    </Box>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { layout: { eq: "blog-post" } } }) {
      edges {
        node {
          tableOfContents
          timeToRead
          frontmatter {
            title
            subtitle
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
    subtitle: "It couldn't be easier!",
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

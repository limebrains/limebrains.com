import React from 'react'
import { graphql } from 'gatsby';
import * as _ from 'lodash';
import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Card } from '../components/card';
import { Link } from '../components/link';
import { Img } from '../components/img';
import { FlexBlog, Box } from '../components/flex';

import Carousel from '../components/carousel';



const Blog = ({ data }) => (
  <Layout>
    <SEO title="Page two" />

    <Carousel data={Slides} />

    <Box m={3}>
      <FlexBlog>
        {data.allMarkdownRemark.edges.map((post) => (
          <Box key={post.node.frontmatter.title}>
            <Link to={post.node.fields.slug}>
              <Card title={_.get(post, 'node.frontmatter.title')}>
                <Img src={_.get(post, 'node.frontmatter.image')} />
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
  allMarkdownRemark (filter: {fields: {layout: {eq: "blog-post"}}}) {
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
    image: 'https://i.ytimg.com/vi/HWn85tjFMIQ/maxresdefault.jpg',
    header: 'Add a progress meter to your loops in a second',
    subtitle: 'Add a progress meter to your loops in a second',
    date: 'September 18 2019',
    link: '/blog/2017-10-20T00:00-progress-bar/'
  },
  {
    image: 'https://c.pxhere.com/photos/b3/37/coding_computer_hacker_hacking_html_programmer_programming_script-1366057.jpg!d',
    header: 'How to easily find biggest files?',
    subtitle: 'How to easily find biggest files?',
    date: 'September 19 2019',
    link: '/blog/2017-10-20T01:00-disk-usage/'
  },
  {
    image: 'https://static.pexels.com/photos/7055/desk-computer-imac-home-large.jpg',
    header: 'How to create alert in osx?',
    subtitle: 'How to create alert in osx?',
    date: 'September 20 2019',
    link: '/blog/2017-10-20T02:00-alert-in-osx/'
  }
]
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

    <Carousel data={data} />

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

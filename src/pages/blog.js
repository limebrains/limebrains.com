import React from 'react'
import { graphql } from 'gatsby';
import * as _ from 'lodash';

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Section } from '../components/section';
import { colors } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';
import { Card } from '../components/card';
import { Button } from '../components/buttons';
import { Link } from '../components/link';
import { Img } from '../components/img';
import { Box, Flex } from '../components/flex';
import { Reveal, Flip } from 'react-reveal';
import { LimeBrainsLogo } from '../components/theme/logos';

const Blog = ({data}) => (
  <Layout>
    <SEO title="Page two"/>

    <Section
      background={colors.sections.greenSection.background}
    >
      <Flip left wait={2000}>
        <Img src={LimeBrainsLogo} responsive width={150}/>
      </Flip>
      <Reveal right fraction={1}>
        <SectionHeading title={'Blog'} inverse />
      </Reveal>
    </Section>

    <Flex wrap={'wrap'}>
      {data.allMarkdownRemark.edges.map((post) => (
        <Flex w={1 / 5} mt={'1rem'} px={'1rem'}>
          <Reveal right fraction={1}>
            <Box flex={1}>
              <Card
                title={_.get(post, 'node.frontmatter.title')}
                cta={
                  <Link to={post.node.fields.slug}>
                    <Button
                      plaintext
                      primary
                    >
                      READ
                    </Button>
                  </Link>
                }
              >
                <Img src={_.get(post, 'node.frontmatter.image')}/>
                <p dangerouslySetInnerHTML={{__html: _.get(post, 'node.frontmatter.subtitle')}}></p>
              </Card>
            </Box>
          </Reveal>
        </Flex>
      ))}
    </Flex>

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

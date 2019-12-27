import * as React from 'react'
import * as _ from 'lodash'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { SectionHeading } from '../components/heading'
import { Img } from '../components/img';
import { Box } from '../components/flex';
import { Card } from '../components/card';
import Bar from '../components/showhidebar';
import { mobileLandscape } from '../components/responsive';

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Row = styled.div`
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

const ClientTemplate = ({ data }) => {
  const title = _.get(data, 'markdownRemark.frontmatter.title');
  return (
    <Layout>
      <SEO title={_.get(data, 'markdownRemark.frontmatter.seo.title')} />
      <LayoutWrapper>

        <Box>
          <Card autoSize>
            <SectionHeading title={title} />

            <Img src={_.get(data, 'markdownRemark.frontmatter.image')} />
            <Row>
              <Name>{_.get(data, 'markdownRemark.frontmatter.title')}</Name>
              <Position>{_.get(data, 'markdownRemark.frontmatter.website')}</Position>
            </Row>
          </Card>
        </Box>

        <Box mt={'3rem'}/>

        <Section>
          Motto
        </Section>

        <Card autoSize>
          <Motto>{_.get(data, 'markdownRemark.frontmatter.motto')}</Motto>
        </Card>

        <Box mt={'3rem'}/>

        <Section>
          FAQ
        </Section>

        <Card autoSize>
          <Box mt={'3rem'}/>

          <Bar
            header="Do you do mobile apps?"
            myIndex="0"
            content="Yes, we specialize in development of the mobile apps for Android / iOS"
          />
          <Bar
            header="What technologies you use?"
            myIndex="1"
            content="Python, Django/REST, Pyramid, PostgreSQL, MySQL, MongoDB, ElasticSearch, AWS, serverless. ReactJS, Angular, ES6, Webpack, Redux, TypeScript. We also have experience in the following areas: SQL, Ajax, OOP, and software design and testing, Django, Python, Django Rest Framework, Angular, JS, HTML5, JQuery."
          />
          <Bar
            header="Do you offer full tech support?"
            myIndex="2"
            content="Yes, we offer full tech support for our clients."
          />
          <Bar
            header="24/7 Friendly Support?"
            myIndex="3"
            content="Yes, contact us via email or chat. For sure you will be served."
          />
        </Card>

        <Box mt={'3rem'}/>

        <Section>
          Other Projects
        </Section>

        <Card autoSize>
          <Motto>{_.get(data, 'markdownRemark.frontmatter.motto')}</Motto>
        </Card>
      </LayoutWrapper>
    </Layout>
  )
}

export default ClientTemplate

export const query = graphql`
  query ClientTemplateQuery($slug: String!) {
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
        description
        website
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
  }
`

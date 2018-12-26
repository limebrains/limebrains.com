import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Section } from '../components/section';
import { colors } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two"/>

    <Section
      background={colors.sections.lightSection.background}
    >
      <SectionHeading title={'Clients'}/>
    </Section>

    <Section
      background={colors.sections.greenSection.background}
    >
      <SectionHeading title={'Meet The Team'} inverse/>
    </Section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

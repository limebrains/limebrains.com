import React from 'react'

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
      <SectionHeading title={'Blog'}/>
    </Section>

  </Layout>
)

export default SecondPage

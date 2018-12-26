import React from 'react'

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Section } from '../components/section';
import { colors } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';
import { Slide, Flip, Fade } from 'react-reveal';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>


    <Section
      background={colors.sections.whiteSection.background}
      size={'xs'}
    >
      <Slide left>
        <SectionHeading title={'Our areas of interest'}/>
      </Slide>
    </Section>


    <Section
      background={colors.sections.lightSection.background}
    >
      <Flip right>
        <SectionHeading title={'Customer Reviews'}/>
      </Flip>
    </Section>

    <Section
      background={colors.sections.greenSection.background}
    >
      <Fade>
        <SectionHeading title={'Meet The Team'} inverse/>
      </Fade>
    </Section>

  </Layout>
)

export default IndexPage

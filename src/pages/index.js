import React from 'react'
import Flip from 'react-reveal/Flip';

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Section } from '../components/section';
import { colors } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>


    <Section
      background={colors.sections.whiteSection.background}
      size={'xs'}
    >
      <Flip right>
        <SectionHeading title={'Our areas of interest'}/>
      </Flip>
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
      <Flip left>
        <SectionHeading title={'Meet The Team'} inverse/>
      </Flip>
    </Section>

  </Layout>
)

export default IndexPage

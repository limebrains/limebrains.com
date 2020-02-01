import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/index'
import { FAQ } from '../components/sections/faq'
import { Team } from '../components/sections/team'
import { Areas } from '../components/sections/areas'
import { About } from '../components/sections/about'
import { Expertise } from '../components/sections/expertise'
import { Reviews } from '../components/sections/reviews'
import { JobSection } from '../components/sections/benefits'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`limebrains`, `software house`, `best software house poland`, `fullstack`, `python`]}/>

    <Areas/>

    <About/>

    <Expertise/>

    <Reviews/>

    <Team/>

    <JobSection/>

    <FAQ/>
  </Layout>
);

export default IndexPage

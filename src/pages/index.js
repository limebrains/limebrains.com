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
import { Fade } from 'react-reveal';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`limebrains`, `software house`, `best software house poland`, `fullstack`, `python`]}/>

    <Fade >
      <Areas/>
    </Fade>

    <Fade>
      <About/>
    </Fade>

    <Fade>
      <Expertise/>
    </Fade>
    <Fade>
      <JobSection/>
    </Fade>

    <Fade>
      <FAQ/>
    </Fade>
  </Layout>
);

export default IndexPage

import React from 'react'

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Img } from '../components/img';
import { LimeBrainsLogo } from '../components/theme/logos';
import { Flip } from 'react-reveal';
import { Flex } from '../components/flex';
import { SectionHeading } from '../components/heading';
import { Text } from '../components/text';
import { colors } from '../components/theme/colors';
import { Section } from '../components/section';
import Particles from 'react-particles-js';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>

    <Section
      background={colors.sections.greenSection.background}
      size={'lg'}
    >

      <Flex justify={'center'} align={'center'} flex={1} flexDirection={'column'} pt={'4rem'}>
        <Flip right>
          <SectionHeading title={'Not found'} inverse/>
        </Flip>
        <Flip right delay={500} fraction={1}>
          <Img src={LimeBrainsLogo} responsive width={200}/>
        </Flip>
        <Flip bottom delay={1000} fraction={1}>
          <Text inverse>
            You just hit a route that doesn&#39;t exist...
          </Text>
        </Flip>
      </Flex>


      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: false,
                color: "#ffffff",
                blur: 5
              }
            },
            color: {
              value: colors.primary.dark,
            },
            number: {
              value: 10,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

    </Section>
  </Layout>
)

export default NotFoundPage

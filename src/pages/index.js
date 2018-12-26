import React from 'react'

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Section } from '../components/section';
import { colors, gradients } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';
import { Slide, Flip, Fade } from 'react-reveal';
import { IconRounded } from '../components/icon';
import { Flex, Box } from '../components/flex';
import Particles from 'react-particles-js';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>


    <Section
      background={colors.sections.whiteSection.background}
      size={'xs'}
    >
      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              enable: false
            },
            number: {
              value: 5,
            },
            color: {
              value: colors.primary.dark,
            },
            size: {
              value: 3,
              random: true,
	            anim: {
                speed: 4,
                size_min: 0.3
	            }
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
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


      <Slide left>
        <SectionHeading title={'Our areas of interest'}/>
      </Slide>
      <Flex flex={1} pt={'2rem'}>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide left>
            <IconRounded icon={'FaLightbulb'}/>
            <SectionHeading title={'Progressive apps'} subtitle={'ReactJS / GraphQL / NodeJS / Mobile'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide bottom>
            <IconRounded icon={'FaKeyboard'}/>
            <SectionHeading title={'Scalable API'} subtitle={'AWS / Google Cloud / Terraform / Docker'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide right>
            <IconRounded icon={'FaRocket'}/>
            <SectionHeading title={'Open source'} subtitle={'Pet / Sufler / pydrill / and much more'}/>
          </Slide>
        </Flex>
      </Flex>
    </Section>


    <Section
      background={colors.sections.lightSection.background}
    >
      <Particles
        width={'100%'}
        params={{
          polygon: {
            draw: {
              stroke: {
                color: 'red',
              }
            }
          },
          particles: {
            line_linked: {
              shadow: {
                enable: false,
                color: "#ffffff",
                blur: 5
              }
            },
            number: {
              value: 40,
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

      <Flip right>
        <SectionHeading title={'Customer Reviews'}/>
      </Flip>

      <Flex flex={1} pt={'2rem'}>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide left>
            <IconRounded icon={'FaLightbulb'}/>
            <SectionHeading title={'Progressive apps'} subtitle={'ReactJS / GraphQL / NodeJS / Mobile'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide bottom>
            <IconRounded icon={'FaKeyboard'}/>
            <SectionHeading title={'Scalable API'} subtitle={'AWS / Google Cloud / Terraform / Docker'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide right>
            <IconRounded icon={'FaRocket'}/>
            <SectionHeading title={'Open source'} subtitle={'Pet / Sufler / pydrill / and much more'}/>
          </Slide>
        </Flex>
      </Flex>
    </Section>

    <Section
      background={colors.sections.greenSection.background}
    >
      <Fade>
        <SectionHeading title={'Meet The Team'} inverse/>
      </Fade>

      <Flex flex={1} pt={'2rem'}>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide left>
            <IconRounded icon={'FaLightbulb'}/>
            <SectionHeading title={'Progressive apps'} subtitle={'ReactJS / GraphQL / NodeJS / Mobile'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide bottom>
            <IconRounded icon={'FaKeyboard'}/>
            <SectionHeading title={'Scalable API'} subtitle={'AWS / Google Cloud / Terraform / Docker'}/>
          </Slide>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
          <Slide right>
            <IconRounded icon={'FaRocket'}/>
            <SectionHeading title={'Open source'} subtitle={'Pet / Sufler / pydrill / and much more'}/>
          </Slide>
        </Flex>
      </Flex>
    </Section>

  </Layout>
)

export default IndexPage

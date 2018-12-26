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
import { Text } from '../components/text';
import { LimeBrainsLogo } from '../components/theme/logos';
import { Img } from '../components/img';

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
      <Flex p={'3rem'}>
        <Box flex={1}>
          <Flip right>
            <SectionHeading title={'ABOUT US'}/>
          </Flip>
          <Text align={'center'}>
            We are The Software House where business questions meet software answers.
            <br/>
            <br/>
            We provide web and mobile solutions for: enterprises which want to automate.

            <Flex flex={1} justify={'center'} align={'center'} pt={'2rem'}>
              <Flex flex={1} justify={'center'} align={'center'}>
                <IconRounded icon={'FaLightbulb'}/>
              </Flex>
              <Flex flex={1} justify={'center'} align={'center'}>
                <IconRounded icon={'FaKeyboard'}/>
              </Flex>
              <Flex flex={1} justify={'center'} align={'center'}>
                <IconRounded icon={'FaRocket'}/>
              </Flex>
              <Flex flex={1} justify={'center'} align={'center'}>
                <IconRounded icon={'FaLightbulb'}/>
              </Flex>
            </Flex>
          </Text>
        </Box>
        <Flex flex={1} pt={'2rem'} flexDirection={'column'} justify={'center'} align={'center'}>
          <Flip right>
            <Img src={LimeBrainsLogo} responsive width={200}/>
          </Flip>
        </Flex>
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


    <Section
      background={colors.sections.greenSection.background}
    >
      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5
              }
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

      <Flip right>
        <SectionHeading title={'Our expertise'} inverse/>
      </Flip>

      <Flex flex={1} pt={'2rem'}>
        <Flex flex={1} flexDirection={'column'}>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaLightbulb'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Idea'} inverse/>
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaKeyboard'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Code'} inverse/>
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaRocket'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Success'} inverse/>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1}>
          <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
            <Slide left>
              <SectionHeading title={'Progressive apps'} subtitle={'ReactJS / GraphQL / NodeJS / Mobile'} inverse/>
            </Slide>
          </Flex>
          <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
            <Slide bottom>
              <SectionHeading title={'Scalable API'} subtitle={'AWS / Google Cloud / Terraform / Docker'} inverse/>
            </Slide>
          </Flex>
          <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
            <Slide right>
              <SectionHeading title={'Open source'} subtitle={'Pet / Sufler / pydrill / and much more'} inverse/>
            </Slide>
          </Flex>
        </Flex>
      </Flex>
    </Section>


    <Section
      background={colors.sections.whiteSection.background}
    >
      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5
              }
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
      background={colors.sections.lightSection.background}
    >
      <Fade>
        <SectionHeading title={'Meet The Team'}/>
      </Fade>

      <Flex flex={1} pt={'2rem'}>
        <Flex flex={2} align={'center'} justify={'center'}>
          <Flip right>
            <Img src={LimeBrainsLogo} responsive width={200}/>
          </Flip>
        </Flex>
        <Flex flex={1} flexDirection={'column'} justify={'center'} align={'flex-end'} pr={'5rem'}>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaLightbulb'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Idea'}/>
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaKeyboard'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Code'}/>
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaRocket'}/>
            <Flex pl={'1rem'}>
              <SectionHeading title={'Success'}/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>

  </Layout>
)

export default IndexPage

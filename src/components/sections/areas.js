import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { Slide } from 'react-reveal'
import { IconRounded } from '../icon'
import { Flex } from '../flex'
import Particles from 'react-particles-js'
import { isMobile } from 'react-device-detect'

export const Areas = () => {
  return (
    <Section
      id="areas"
      background={colors.sections.whiteSection.background}
      size={'xs'}
    >
      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              enable: false,
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
                size_min: 0.3,
              },
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
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
      {/* [{title: 'Progressive apps', subtitle: '', icon: ''}] */}

      <Slide left fraction={1}>
        <SectionHeading title={'Our areas of interest'} />
      </Slide>
      <Flex
        flex={1}
        pt={'2rem'}
        align={'center'}
        justify={'center'}
        w={2 / 3}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          flexDirection={'column'}
        >
          <Slide left fraction={1}>
            <IconRounded icon={'FaLightbulb'} />
            <SectionHeading
              title={'Progressive apps'}
              subtitle={'ReactJS / GraphQL / NodeJS / Mobile'}
            />
          </Slide>
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          flexDirection={'column'}
        >
          <Slide bottom fraction={1}>
            <IconRounded icon={'FaKeyboard'} />
            <SectionHeading
              title={'Scalable API'}
              subtitle={'AWS / Google Cloud / Terraform / Docker'}
            />
          </Slide>
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          flexDirection={'column'}
        >
          <Slide right fraction={1}>
            <IconRounded icon={'FaRocket'} />
            <SectionHeading
              title={'Open source'}
              subtitle={'Pet / Sufler / pydrill / and much more'}
            />
          </Slide>
        </Flex>
      </Flex>
    </Section>
  )
}

import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { Slide, Flip } from 'react-reveal'
import { IconRounded } from '../icon'
import { Flex } from '../flex'
import Particles from 'react-particles-js'
import { Context as ResponsiveContext } from 'react-responsive'

export const Reviews = () => {
  return (
    <ResponsiveContext.Consumer>
      {({ isPhonePortrait }) => (
        <Section
          id="reviews"
          background={colors.sections.whiteSection.background}
        >
          <Particles
            width={'100%'}
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: '#ffffff',
                    blur: 5,
                  },
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

          <Flip right>
            <SectionHeading title={'Customer Reviews'} />
          </Flip>

          <Flex
            flex={1}
            pt={'2rem'}
            align={'center'}
            justify={'center'}
            w={2 / 3}
            flexDirection={isPhonePortrait ? 'column' : 'row'}
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
      )}
    </ResponsiveContext.Consumer>
  )
}

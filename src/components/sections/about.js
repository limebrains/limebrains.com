import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { Flip } from 'react-reveal'
import { Flex, Box } from '../flex'
import Particles from 'react-particles-js'
import { Text } from '../text'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const About = () => {
  return (
    <Section
      id="about"
      background={colors.sections.lightSection.background}
    >
      <Flex
        p={'2rem'}
        align={'center'}
        justify={'center'}
        flex={1}
        w={3 / 4}
      >
        <Box flex={1}>
          <Flip right fraction={1}>
            <SectionHeading title={'ABOUT US'}/>
          </Flip>
          <Text align={'center'}>
            We are The Software House where business questions meet software
            answers.
            <br/>
            <br/>
            We provide web and mobile solutions for: enterprises which want
            to automate.
          </Text>

          <Flex flex={1} pt={'2rem'} justify={'center'} align={'center'}>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              ml={'5%'}
              mr={'5%'}
            >
              <Flip right fraction={1} pr={'2rem'}>
                <CircularProgressbar
                  value={40}
                  text={`40 projects`}
                  maxValue={40}
                  strokeWidth={5}
                  /* This is important to include, because if you're fully managing the
            animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({
                    pathTransition: 'none',
                    textSize: '12px',
                    pathColor: '#4C7753',
                    textColor: '#4C7753',
                  })}
                />
              </Flip>
            </Flex>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              ml={'5%'}
              mr={'5%'}
            >
              <Flip right fraction={1}>
                <CircularProgressbar
                  value={25}
                  text={`25 clients`}
                  maxValue={25}
                  strokeWidth={5}
                  /* This is important to include, because if you're fully managing the
            animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({
                    pathTransition: 'none',
                    textSize: '12px',
                    pathColor: `rgba(77, 118, 84)`,
                    textColor: '#4C7753',
                  })}
                />
              </Flip>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Particles
        width={'100%'}
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: false,
                color: '#ffffff',
                blur: 5,
              },
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
    </Section>
  )
};

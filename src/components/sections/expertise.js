import React from 'react'
import { Section } from '../section';
import { colors } from '../theme/colors';
import { SectionHeading } from '../heading';
import { Slide, Flip } from 'react-reveal';
import { IconRounded } from '../icon';
import { Flex } from '../flex';
import Particles from 'react-particles-js';

export const Expertise = () => {
    return (
        <Section
        id='expertise'
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

      <Flip right fraction={1}>
        <SectionHeading title={'Our expertise'} inverse/>
      </Flip>

      <Flex flex={1} pt={'2rem'} align={'center'} justify={'center'} w={2 / 3}>
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
        <Flex flex={3}>
          <Flex flex={1} justify={'center'} align={'center'} flexDirection={'column'}>
            <Slide left fraction={1}>
              <SectionHeading title={'Progressive apps'} subtitle={'ReactJS / GraphQL / NodeJS / Mobile'} inverse/>
            </Slide>
          </Flex>
        </Flex>
      </Flex>
    </Section>
    )
}

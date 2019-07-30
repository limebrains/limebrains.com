import React from 'react'
import { Section } from '../section';
import { colors } from '../theme/colors';
import { SectionHeading } from '../heading';
import { Flip } from 'react-reveal';
import { IconRounded } from '../icon';
import { Flex, Box } from '../flex';
import Particles from 'react-particles-js';
import { LimeBrainsLogo } from '../theme/logos';
import { Text } from '../text';
import { Img } from '../img';

export const About = () => {
    return (
        <Section
      id='about'
      background={colors.sections.lightSection.background}
    >
      <Flex p={'2rem'} align={'center'} justify={'center'} flex={1} w={3 / 4}>
        <Box flex={1}>
          <Flip right fraction={1}>
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
          <Flip right fraction={1}>
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
    )
}
import React from 'react'
import { Slide } from 'react-reveal'
import styled from 'styled-components'

import { Flex } from '../flex'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { IconRounded } from '../icon'
import { mobileLandscape } from '../responsive';

const Row = styled(Flex)`
  flex-direction: row;
  @media (max-width: ${mobileLandscape}px) {
    flex-direction: column;
  }
`

export const Areas = () => {
  return (
    <Section
      id="areas"
      background={colors.sections.whiteSection.background}
      size={'xs'}
    >
      <Slide left fraction={1}>
        <SectionHeading title={'Our areas of interest'} />
      </Slide>

      <Row
        flex={1}
        pt={'2rem'}
        align={'center'}
        justify={'center'}
        w={2 / 3}
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
      </Row>
    </Section>
  )
}

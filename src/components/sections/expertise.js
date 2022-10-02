import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { Slide, Flip } from 'react-reveal'
import { IconRounded } from '../icon'
import { Flex } from '../flex'
import styled from 'styled-components';
import { mobileLandscape } from '../responsive';

const Row = styled(Flex)`
  flex-direction: row;
  @media (max-width: ${mobileLandscape}px) {
    flex-direction: column;
  }
`

export const Expertise = () => {
  return (
    <Section
      id="expertise"
      background={colors.sections.greenSection.background}
    >
      <Flip right fraction={1}>
        <SectionHeading title={'Our expertise'} inverse />
      </Flip>

      <Row
        flex={1}
        pt={'2rem'}
        align={'center'}
        justify={'center'}
        w={2 / 3}
      >
        <Flex flex={1} flexDirection={'column'}>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaLightbulb'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Idea'} inverse />
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaKeyboard'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Code'} inverse />
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaRocket'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Success'} inverse />
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={3} flexDirection={'column'}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            flexDirection={'column'}
          >
            <Slide left fraction={1}>
              <SectionHeading
                title={'Javascript'}
                subtitle={'ReactJS / VueJS / NodeJS / Next.js / ReactNative'}
                inverse
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
              <SectionHeading
                title={'Python'}
                subtitle={'Python / Django / FastAPI / Flask'}
                inverse
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
              <SectionHeading
                title={'Dev-Ops'}
                subtitle={'AWS / Google Cloud / Docker / kubernetes'}
                inverse
              />
            </Slide>
          </Flex>
        </Flex>
      </Row>
    </Section>
  )
}

import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import { SectionHeading } from '../heading'
import { Flip, Fade } from 'react-reveal'
import { IconRounded } from '../icon'
import { Flex } from '../flex'
import { LimeBrainsLogo } from '../theme/logos'
import { Img } from '../img'

export const Team = () => {
  return (
    <Section id="team" background={colors.sections.lightSection.background}>
      <Fade fraction={1}>
        <SectionHeading title={'Meet The Team'} />
      </Fade>

      <Flex flex={1} pt={'2rem'} align={'center'} justify={'center'} w={1 / 2}>
        <Flex flex={2} align={'center'} justify={'center'}>
          <Flip right fraction={1}>
            <Img src={LimeBrainsLogo} responsive width={200} />
          </Flip>
        </Flex>
        <Flex
          flex={1}
          flexDirection={'column'}
          justify={'center'}
          align={'flex-end'}
          pr={'5rem'}
        >
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaLightbulb'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Idea'} />
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaKeyboard'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Code'} />
            </Flex>
          </Flex>
          <Flex pb={'1rem'} pl={'2rem'}>
            <IconRounded icon={'FaRocket'} />
            <Flex pl={'1rem'}>
              <SectionHeading title={'Success'} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  )
}

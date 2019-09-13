import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'

import Bar from '../showhidebar'

export const FAQ = () => {
  return (
    <Section          
    id="FAQ"
    background={colors.sections.lightSection.background}
    size={'xs'}>
      <Bar header="How long are the projects?" index='0'/>
      <Bar header="Lorem ipsum dolor sit amet" index='1'/>
      <Bar header="Lorem ipsum dolor sit amet" index='2'/>
      <Bar header="Lorem ipsum dolor sit amet" index='3'/>
      <Bar header="Lorem ipsum dolor sit amet" index='4'/>
    </Section>
  )
}
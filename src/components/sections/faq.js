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
      <Bar text="How long are the projects?"/>
      <Bar text="Lorem ipsum dolor sit amet"/>
      <Bar text="Lorem ipsum dolor sit amet"/>
      <Bar text="Lorem ipsum dolor sit amet"/>
      <Bar text="Lorem ipsum dolor sit amet"/>


    </Section>
  )
}
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
      <Bar header="How long are the projects?" myIndex='0'/>
      <Bar header="Lorem ipsum dolor sit amet" myIndex='1'/>
      <Bar header="Lorem ipsum dolor sit amet" myIndex='2'/>
      <Bar header="Lorem ipsum dolor sit amet" myIndex='3'/>
      <Bar header="Lorem ipsum dolor sit amet" myIndex='4'/>
    </Section>
  )
}
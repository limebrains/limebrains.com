import React from 'react'
import { Section } from '../section'
import { colors } from '../theme/colors'
import styled from 'styled-components'


import Bar from '../showhidebar'


const Header = styled.div`
  text-align: center;
  h2 {
    font-weight: 400;
    margin: 0;
    padding-bottom: 4em;
    padding-top: 0.8em;
  }
  h5{
    margin: 0;
    font-weight: 100;
    opacity: 0.5;
  }
`

export const FAQ = () => {


  return (
    <Section
    id="FAQ"
    background={colors.sections.lightSection.background}
    size={'xs'}>
      <Header>
        <h5>FREQUENTLY ASKED QUESTIONS</h5>
        <h2>What would you like to know?</h2>
      </Header>
      <Bar
        header="Do you do mobile apps?"
        myIndex='0'
        content="Yes, we specialize in development of the mobile apps for Android / iOS"/>
      <Bar
        header="What technologies you use?"
        myIndex='1'
        content="Python, Django/REST, Pyramid, PostgreSQL, MySQL, MongoDB, ElasticSearch, AWS, serverless. ReactJS, Angular, ES6, Webpack, Redux, TypeScript. We also have experience in the following areas: SQL, Ajax, OOP, and software design and testing, Django, Python, Django Rest Framework, Angular, JS, HTML5, JQuery."/>
      <Bar
        header="Do you offer full tech support?"
        myIndex='2'
        content="Yes, we offer full tech support for our clients."/>
      <Bar
        header="24/7 Friendly Support?"
        myIndex='3'
        content="Yes, contact us via email or chat. For sure you will be served."/>
    </Section>
  )
}

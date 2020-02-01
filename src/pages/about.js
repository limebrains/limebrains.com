import React from 'react'
import { Fade, Flip, Slide } from 'react-reveal';
import styled from 'styled-components';

import SEO from '../components/seo';
import { Img } from '../components/img';
import { Link } from '../components/link';
import { Section } from '../components/section';
import Layout from '../components/layout/index';
import { Box, Flex } from '../components/flex';
import { IconRounded } from '../components/icon';
import { colors } from './../components/theme/colors';
import { SectionHeading } from '../components/heading';
import { ClientCard, PersonCard } from '../components/card';
import { mobileLandscape } from '../components/responsive';
import { LimeBrainsLogo } from '../components/theme/logos';


const Motto = styled.div`
  padding: 2rem;
  text-align: center;
  color: #c2bebe;
  font-style: italic;
  font-size: 60px;

  @media (max-width: ${mobileLandscape}px) {
    font-size: 30px;
  }
`;

const Code = styled.code`
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid ${colors.primary.main};
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
`;


const AboutUs = () => (
  <Layout>
    <SEO title="About us"/>

    <Fade fraction={1}>
      <SectionHeading title={'About us'}/>
    </Fade>

    <Flex ml={'10%'} mr={'10%'}>
      <Motto>
        We are The Software House where business questions meet software answers.
      </Motto>
    </Flex>

    <Flex flex={1} pt={'2rem'} align={'center'} justify={'center'} ml={'20%'} mr={'20%'}>
      <Flex flex={2} align={'center'} justify={'center'}>
        <Flip left fraction={1}>
          <Img src={LimeBrainsLogo} responsive width={200}/>
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
          <IconRounded icon={'FaLightbulb'}/>
          <Flex pl={'1rem'}>
            <SectionHeading title={'Idea'}/>
          </Flex>
        </Flex>
        <Flex pb={'1rem'} pl={'2rem'}>
          <IconRounded icon={'FaKeyboard'}/>
          <Flex pl={'1rem'}>
            <SectionHeading title={'Code'}/>
          </Flex>
        </Flex>
        <Flex pb={'1rem'} pl={'2rem'}>
          <IconRounded icon={'FaRocket'}/>
          <Flex pl={'1rem'}>
            <SectionHeading title={'Success'}/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>

    <Section>
      <Flex ml={'20%'} mr={'20%'} flexDirection={'column'}>
        <p>
          Lime Brains was started in 2016 from the joined idea of building software house that focuses on building long
          term relations with the clients.
          Since founding we build strong relationships with multiple clients.
          We have proven to solve the most complex problems.
        </p>
        <p>
          When we have doubts we reach to "Zen of Python":
        </p>

        <Box mt={'2rem'}/>

        <Slide left>
          <Code>
            >>> import this
            <br/>
            The Zen of Python, by Tim Peters
            <br/>
            <br/>
            Beautiful is better than ugly.<br/>
            Explicit is better than implicit.<br/>
            Simple is better than complex.<br/>
            Complex is better than complicated.<br/>
            Flat is better than nested.<br/>
            Sparse is better than dense.<br/>
            Readability counts.<br/>
            Special cases aren't special enough to break the rules.<br/>
            Although practicality beats purity.<br/>
            Errors should never pass silently.<br/>
            Unless explicitly silenced.<br/>
            In the face of ambiguity, refuse the temptation to guess.<br/>
            There should be one-- and preferably only one --obvious way to do it.<br/>
            Although that way may not be obvious at first unless you're Dutch.<br/>
            Now is better than never.<br/>
            Although never is often better than *right* now.<br/>
            If the implementation is hard to explain, it's a bad idea.<br/>
            If the implementation is easy to explain, it may be a good idea.<br/>
            Namespaces are one honking great idea -- let's do more of those!<br/>
          </Code>
        </Slide>
      </Flex>
    </Section>

    <Flex mt={'1rem'} mb={'10vh'} ml={'10%'} mr={'10%'}>
      <Fade>
        <Motto>
          We provide web and mobile solutions for: enterprises which want to automate.
        </Motto>
      </Fade>
    </Flex>

    <Flex>
      <Box flex={1}>
        <Link to={'/clients'}>
          <Section background={colors.sections.lightSection.background}>
            <SectionHeading title={'Clients'}/>
          </Section>
        </Link>
      </Box>

      <Box flex={1}>
        <Link to={'/team'}>
          <Section background={colors.sections.greenSection.background}>
            <SectionHeading title={'Meet The Team'} inverse/>
          </Section>
        </Link>
      </Box>
    </Flex>

    <Flex mb={'3rem'} mt={'4rem'} ml={'10%'} mr={'10%'}>
      <Box pr={'2rem'} pl={'2rem'}>
        <Fade>
          <ClientCard/>
        </Fade>
      </Box>

      <Box pr={'2rem'} pl={'2rem'}>
        <Fade>
          <PersonCard/>
        </Fade>
      </Box>
    </Flex>
  </Layout>
);

export default AboutUs

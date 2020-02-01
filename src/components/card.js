import React from 'react'
import styled from 'styled-components'
import { Card as DefaultCard } from 'rendition'

import { Img } from './img';
import { Link as GatsbyLink } from './link';

const CardWrapper = styled.div`
  display: grid;
  ${({autoSize}) => autoSize ? '' : 'grid-auto-rows: 400px;'}
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }
  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const Card = ({children, ...rest}) => (
  <CardWrapper {...rest}>
    <DefaultCard {...rest}>{children}</DefaultCard>
  </CardWrapper>
);


const Row = styled.div`
  color: #8f9297;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #bec1c6;
`;

const Name = styled.div`
`;

const Position = styled.div`
  font-size: 12px;
`;

const Motto = styled.div`
  padding: 2rem;
  text-align: center;
  color: #8f9297;
  font-style: italic;
`;

const Link = ({to, href, target, children}) => {
  if (to) {
    return (
      <GatsbyLink to={to}>
        {children}
      </GatsbyLink>
    )
  }
  if (href) {
    return (
      <a href={href} style={{textDecoration: 'none'}} target={target || '_blank'}>
        {children}
      </a>
    )
  }
};

export const PersonCard = ({
                             to,
                             href,
                             target,
                             imgSrc,
                             name,
                             postion,
                             motto,
                           }) => (
  <Card autoSize>
    <Link to={to} href={href || 'https://drift.me/mail12/meeting'} target={target}>
      <Img src={imgSrc || 'https://i.imgur.com/Y1obHut.jpg'}/>
      <Row>
        <Name>{name || 'Wanna join?'}</Name>
        <Position>{postion || 'your new title'}</Position>
      </Row>
      <Motto>{motto || 'Join us!'}</Motto>
    </Link>
  </Card>
);

export const ClientCard = ({
                             to,
                             href,
                             target,
                             imgSrc,
                             name,
                             postion,
                             motto,
                           }) => (
  <PersonCard
    to={to}
    href={href}
    target={target}
    imgSrc={imgSrc || 'https://i.imgur.com/g9ClB9J.png'}
    name={name || "Your company"}
    postion={postion || 'your website'}
    motto={motto || 'Let\'s talk about your big idea?'}
  />
);


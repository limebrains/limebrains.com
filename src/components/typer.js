import React from 'react'
import styled from 'styled-components'

import { colors } from './theme/colors';

const HeaderText = styled.div`
  color: ${colors.white};
`;

class Typer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { title, subtitle } = props;

    this.state = {
      title: title,
      subtitle: subtitle,
      slogan: props.slogans[0],
      isDeleting: false,
      i: 0,
    }
  }

  componentDidMount() {
    this.loop()
  }

  componentWillUnmount() {
    clearInterval()
  }

  loop = () => {
    const { slogan, isDeleting, i } = this.state;
    const {
      slogans,
      typingSpeed,
      removalSpeed,
      timeBetweenSlogans,
    } = this.props;
    const j = i % slogans.length;

    this.setState({
      slogan: isDeleting
        ? slogans[j].substring(0, slogan.length - 1)
        : slogans[j].substring(0, slogan.length + 1),
    });

    if (!isDeleting && slogan === slogans[j]) {
      setTimeout(() => {
        this.setState({ isDeleting: true });
        this.loop()
      }, timeBetweenSlogans)
    } else if (isDeleting && slogan === '') {
      setTimeout(() => {
        this.setState({ isDeleting: false, i: i + 1 });
        this.loop()
      }, timeBetweenSlogans)
    } else {
      setTimeout(this.loop, isDeleting ? removalSpeed : typingSpeed)
    }
  };

  render() {
    const { title, subtitle, slogan } = this.state;
    return (
      <HeaderText>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h3 key={slogan}>{slogan}</h3>
      </HeaderText>
    )
  }
}

export default Typer

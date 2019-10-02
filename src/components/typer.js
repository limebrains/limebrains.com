import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.div`
  color: white;
`;


class Typer extends React.Component {
  constructor(props) {
    super(props);

    const {data} = props;

    this.state = {
      title: data.title,
      subtitle: data.subtitle,
      slogan: '',
      isDeleting: false,
      typingSpeed: 100,
      i: 0
    };
  }

  componentDidMount() {
    this.loop();
  }

  componentWillUnmount() {
    clearInterval();
  }

  loop = () => {
    const {slogan, isDeleting, typingSpeed, i} = this.state;
    const {data} = this.props;
    const j = i % data.slogan.length;

    this.setState({
      slogan: isDeleting ?
        data.slogan[j].substring(0, slogan.length - 1) :
        data.slogan[j].substring(0, slogan.length + 1),
    });

    if (!isDeleting && slogan === data.slogan[j]) {
      setTimeout(() => this.setState({isDeleting: true}), 1000)
    } else if (isDeleting && slogan === '') {
      setTimeout(() => this.setState({isDeleting: false, i: i + 1}), 1000)
    }

    setTimeout(this.loop, typingSpeed);
  };

  render() {
    const {title, subtitle, slogan} = this.state;
    return (
      <HeaderText key={slogan}>
        <h1>
          {title}
        </h1>
        <h3>
          {subtitle}
        </h3>
        <h3 key={slogan}>
          {slogan}
        </h3>
      </HeaderText>
    )
  }
}


export default Typer;

import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.div`
  color: white;
  text-align: center;

`



class Typer extends React.Component {
  state = {
    title: '',
    subtitle: '',
    slogan: '',
    isDeleting: false,
    typingSpeed: 70,
    i: 0
  }

  componentDidMount() {
    this.loop();
  }

  loop = () => {
    const { slogan, title, subtitle, isDeleting, typingSpeed, i } = this.state;
    const { data } = this.props;
    const j = i % data.slogan.length;
    this.setState({
      title: data.title.substring(0, title.length + 1),
      typingSpeed: 200
    })
    if (data.title === title) {
      this.setState({
        subtitle: data.subtitle.substring(0, subtitle.length + 1),
        typingSpeed: 70
      })
    }

    if (data.subtitle === subtitle) {
      this.setState({
        slogan: isDeleting ?
          data.slogan[j].substring(0, slogan.length - 1) :
          data.slogan[j].substring(0, slogan.length + 1),
      })
    }
    if (!isDeleting && slogan === data.slogan[j]) {
      setTimeout(() => this.setState({ isDeleting: true }), 1000)
    } else if (isDeleting && slogan === '') {
      setTimeout(() => this.setState({ isDeleting: false, i: i + 1 }), 500)
    }

    setTimeout(this.loop, typingSpeed);
  }

  render() {
    return (
      <HeaderText>
        <h1>
          {this.state.title}
        </h1>
        <h3>
          {this.state.subtitle}
        </h3>
        <h3>
          {this.state.slogan}
        </h3>
      </HeaderText>
    )
  }
}


export default Typer;
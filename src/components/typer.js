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
    i: 0
  }

  componentDidMount() {
    this.loop();
  }

  loop = () => {
    const { slogan, title, subtitle, isDeleting, i } = this.state;
    const { data, typingSpeed } = this.props;
    const j = i % data.slogan.length;
    this.setState({
      title: data.title.substring(0, title.length + 1)
    })
    if (data.title === title) {
      this.setState({
        subtitle: data.subtitle.substring(0, subtitle.length + 1)
      })
    }

    if (data.subtitle === subtitle) {
      this.setState({
        slogan: isDeleting ?
          data.slogan[j].substring(0, slogan.length - 1) :
          data.slogan[j].substring(0, slogan.length + 1)
      })
    }
    if (slogan === data.slogan[j]) {
      this.setState({ isDeleting: true })
    } else if (isDeleting && slogan === '') {
      this.setState({ isDeleting: false, i: i + 1 })
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
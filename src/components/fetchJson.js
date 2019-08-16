import React, { Component } from 'react'
import footerData from '../content/footer/footer.json'

export class GetProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      footerData: footerData,
    }
  }
  render() {
    const { footerData } = this.state
    return (
      <ul>
        {footerData.footer.PROJECTS.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    )
  }
}

export class GetClients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      footerData: footerData,
    }
  }
  render() {
    const { footerData } = this.state
    return (
      <ul>
        {footerData.footer.CLIENTS.map(client => (
          <li key={client}>{client}</li>
        ))}
      </ul>
    )
  }
}

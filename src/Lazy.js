import React, { Component } from 'react'
import { log } from './hasyem'

export default class Lazy extends Component {
  render() {
    log('Lazy')
    return (
      <div style={{ marginTop: 20 }}>
        <img src="/giphy.gif" width={500} height={300} alt="..." />
      </div>
    )
  }
}

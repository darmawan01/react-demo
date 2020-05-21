import React, { Component } from "react";
import { haloStyles as styles, log } from './hasyem'

export default class HaloComponent extends Component {
  render() {
    const { counter } = this.props;
    log(`Component`)
    return (
      <div style={styles}>
        Component
        <br />
        {counter}
      </div>
    );
  }
}
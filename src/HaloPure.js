import React, { PureComponent } from "react";
import { haloStyles as styles, log } from './hasyem'

export default class HaloPureComponent extends PureComponent {
  render() {
    const { component, counter } = this.props;
    log(`Pure Component ${component}`)
    return (
      <div style={styles}>
        Pure Component
        <br />
        {counter}
      </div>
    );
  }
}
import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import HaloPureComponent from './HaloPure';
import HaloComponent from './Halo';
import { CustomButton } from './Button';
import {
  log,
  appStyles as styles
} from "./hasyem";
import { Text } from './TextArea';
import NoLazy from './NoLazy';

const Lazy = React.lazy(() => import('./Lazy'));

class App extends Component {

  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    showLazy: false,
    showNoLazy: false
  }

  component1 = () => {
    this.setState({
      counter1: this.state.counter1 + 1
    });
  }

  component2 = () => {
    this.setState({
      counter2: this.state.counter2 + 1
    });
  }

  component3 = () => {
    this.setState({
      counter3: this.state.counter3 + 1
    });
  }

  reset = () => {
    this.setState({
      counter1: 0,
      counter2: 0,
      counter3: 0
    });
  }

  handleLazyLoad = () => {
    this.setState({ showLazy: !this.state.showLazy })
  }

  handleNoLazyLoad = () => {
    this.setState({ showNoLazy: !this.state.showNoLazy })
  }

  render() {
    log("Main App");
    const { counter1, counter2, counter3 } = this.state;
    return (
      <main style={{ marginTop: 60 }}>
        <center>
          <h1>JumatHek: RCO (React Components Optimization )</h1>
          <hr />
        </center>

        {/* Materi */}
        <h2>1. Component vs PureComponent vs Stateless Functional Component</h2>
        <div style={{ marginLeft: 20 }}>
          <Text value={`
              export default class HaloComponent extends Component {
                render() {
                  const { counter } = this.props;
                  return (
                    <div style={styles}>
                      Component
                      <br />
                      {counter}
                    </div>
                  );
                }
              }`}
          />
          <Text value={`
              export default class HaloPureComponent extends PureComponent {
                render() {
                  const { component, counter } = this.props;
                  return (
                    <div style={styles}>
                      Pure Component
                      <br />
                      {counter}
                    </div>
                  );
                }
              }`}
          />
          <Text value={`
              export const CustomButton = ({ clicked, name }) => {
                return (
                  <button
                    onClick={clicked}
                    style={buttonStyles}
                  >
                    {name}
                  </button>
                );
              }`}
          />
        </div>

        <h2>2. React Pure Component</h2>
        <div style={styles}>
          <HaloPureComponent counter={counter1} component='A' />
          <HaloPureComponent counter={counter2} component='B' />
          <HaloComponent counter={counter3} />
        </div>

        <div style={styles}>
          <CustomButton clicked={this.component1} name={'Pure Component A'} />
          <CustomButton clicked={this.component2} name={'Pure Component B'} />
          <CustomButton clicked={this.component3} name={'Commponent'} />
          <CustomButton clicked={this.reset} name='Reset' />
        </div>

        <h2>3. React Lazy</h2>
        <div style={{ marginLeft: 20 }}>

          <div style={{ padding: 60 }}>
            <Text value={`
              export default class Lazy extends Component {
                render() {
                  log('Lazy')
                  return (
                    <div style={{ marginTop: 20 }}>
                      <img src="/giphy.gif" width={500} height={300} alt="..." />
                    </div>
                  )
                }
              }`
            } />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ float: 'left', padding: 20 }}>
              <button
                style={{ fontSize: 18 }}
                onClick={this.handleLazyLoad}>{this.state.showLazy ? 'Hide' : 'Show'} the pretty frog with lazy load</button>
              {/* Using The lazy load */}
              {this.state.showLazy && <Suspense fallback={<div>Loading...</div>}>
                <Lazy />
              </Suspense>}
            </div>
            <div style={{ float: 'right', padding: 20 }}>
              <button
                style={{ fontSize: 18 }}
                onClick={this.handleNoLazyLoad}>{this.state.showNoLazy ? 'Hide' : 'Show'} the pretty frog with no lazy load</button>
              {/* No lazy load */}
              {this.state.showNoLazy && <NoLazy />}
            </div>
          </div>
        </div>
        <br />
        <h2>4. ?</h2>
        <div style={{ marginLeft: 20 }}></div>
      </main >
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

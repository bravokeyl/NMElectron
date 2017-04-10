import React, { Component } from 'react';
import classnames from 'classnames';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Overview = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Settings = () => (
  <div>
    <h2>Settings</h2>
  </div>
);

const Reports = () => (
  <div>
    <h2>Reports</h2>
  </div>
);


class BadMain extends Component {
  render() {
    return (
      <x-bad-main class={classnames(this.props.badStyle, 'bad-main')}>
        <Router>
          <div>
            <Route exact path="/" component={Overview} />
            <Route path="/settings" component={Settings} />
            <Route path="/reports" component={Reports} />
          </div>
        </Router>
      </x-bad-main>
    );
  }
}

BadMain.defaultProps = {
  badStyle: 'good'
};


BadMain.propTypes = {
  badStyle: React.PropTypes.string
};
export default BadMain;

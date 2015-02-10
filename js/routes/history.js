var React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return { name: 'History' };
  },
  render() {
    return <div>Hello, {this.state.name}</div>;
  }
});

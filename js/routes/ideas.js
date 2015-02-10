var React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return { name: 'Ideas' };
  },
  render() {
    return <div>Hello, {this.state.name}</div>;
  }
});

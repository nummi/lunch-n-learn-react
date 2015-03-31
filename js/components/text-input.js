var React  = require('react');

module.exports = React.createClass({
  getInitialState() {
    return {
      value: this.props.value
    }
  },

  componentWillReceiveProps(props) {
    this.setState({value: props.value});
  },

  render() {
    return (
      <div className="list-item list-item--field">
        <div className="list-item-error-text animation-jelly"></div>
        <label className="list-item-label-text">{this.props.label}</label>
        <input type="text"
               value={this.state.value}
               onChange={this.props.onChange} />
      </div>
    );
  }
});


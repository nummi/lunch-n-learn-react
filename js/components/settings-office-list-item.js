var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  setHomeOffice() {
    alert('set home office!');
  },

  render() {
    return (
      <div className="list-item">
        <div className="list-item-content">
          <div className="list-item-text" onClick={this.setHomeOffice}>{this.props.name}</div>
        </div>
      </div>
    );
  }
});

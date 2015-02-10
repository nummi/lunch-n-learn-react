var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  mixins: [Router.State],
  render() {
    return (
      <div className="screen">
        Events/Detail {this.getParams().eventId}
      </div>
    );
  }
});

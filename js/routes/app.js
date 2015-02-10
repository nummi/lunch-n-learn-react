var React  = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var TabBar = require('../components/tab-bar');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div id="main-screen" className="animation-jelly">
          <RouteHandler />
        </div>
        <TabBar />
      </div>
    );
  }
});

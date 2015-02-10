var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var ListItem = require('../components/list-item');

module.exports = React.createClass({
  render() {
    var headingStyle = { paddingLeft: 65 };

    return (
      <div className="screen">

        <div className="navigation-bar">
          <div className="navigation-bar-title">Schedule</div>
          <Link to="events-new" className="navigation-bar-button navigation-bar-button--right icon-plus"></Link>
        </div>

        <div className="list list--positioned __with-navigation-bar-above __with-tab-bar-below">
          <div className="list-item list-item--heading" style={headingStyle}>Columbus</div>
          <ListItem eventId="1" />
          <ListItem eventId="2" />
          <ListItem eventId="3" />
          <ListItem eventId="4" />
          <ListItem eventId="5" />
        </div>

      </div>
    );
  }
});


var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var EventStore = require('../stores/event-store');
var ListItem   = require('../components/list-item');

module.exports = React.createClass({
  getInitialState() {
    return {
      events: EventStore.findAll()
    }
  },

  render() {
    var headingStyle = { paddingLeft: 65 };

    var events = this.state.events.map((e) => {
      return <ListItem key={e.id} event={e} />;
    });

    return (
      <div className="screen">

        <div className="navigation-bar">
          <div className="navigation-bar-title">Schedule</div>
          <Link to="events-new" className="navigation-bar-button navigation-bar-button--right icon-plus"></Link>
        </div>

        <div className="list list--positioned __with-navigation-bar-above __with-tab-bar-below">
          <div className="list-item list-item--heading" style={headingStyle}>Columbus</div>
          {events}
        </div>

      </div>
    );
  }
});


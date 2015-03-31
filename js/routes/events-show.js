var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var EventStore = require('../stores/event-store');

module.exports = React.createClass({
  mixins: [Router.State],

  getInitialState() {
    return {
      event: EventStore.findById(this.getParams().eventId)
    }
  },

  render() {
    return (
      <div className="screen">
        <div className="navigation-bar">
          <div className="navigation-bar-title">Event</div>
          <Link to="events-index" className="navigation-bar-button navigation-bar-button--left icon-arrow-left">Back</Link>
          <Link to="events-edit" params={{eventId: this.getParams().eventId}} className="navigation-bar-button navigation-bar-button--right">Edit</Link>
        </div>

        <div className="scroll-view __with-navigation-bar-above __bottom">
          <div className="event-content">
            <h1>{this.state.event.title}</h1>
            <h2>{this.state.event.date} &ndash; {this.state.event.authorName}</h2>
            <h2>Catering will be provided by {this.state.event.catering}</h2>
            <br/>

            <div className="event-description-container">{this.state.event.description}</div>
          </div>
        </div>

      </div>
    );
  }
});

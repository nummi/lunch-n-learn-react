var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var EventStore = require('../stores/event-store');
var TextInput  = require('../components/text-input');

module.exports = React.createClass({
  mixins: [Router.State],

  getInitialState() {
    var originalEvent = EventStore.findById(this.getParams().eventId);
    event = {};
    event.title = originalEvent.title;
    event.date = originalEvent.date;
    event.catering = originalEvent.catering;
    event.description = originalEvent.description;

    return { event }
  },

  save() {
    EventStore.update(this.state.event);
  },

  eventPropChange(propName) {
    return function(e) {
      event = this.state.event;
      event[propName] = e.target.value;
      this.setState({event: event});
    }.bind(this);
  },

  confirmEventDestroy() {
    alert('are you sure?!');
  },

  render() {
    return (
      <div className="screen">
        <div className="navigation-bar">
          <div className="navigation-bar-title">Event</div>
          <Link to="events-show" params={{eventId: this.getParams().eventId}} className="navigation-bar-button navigation-bar-button--left">Cancel</Link>
          <span className="navigation-bar-button navigation-bar-button--right navigation-bar-button--default" onClick={this.save}>Save</span>
        </div>

        <form className="list __with-navigation-bar-above">
          <TextInput value={this.state.event.title}
                     label="Title"
                     onChange={this.eventPropChange("title")} />

          <TextInput value={this.state.event.date}
                     label="Date"
                     onChange={this.eventPropChange("date")} />

          <TextInput value={this.state.event.catering}
                     label="Catering"
                     onChange={this.eventPropChange("catering")} />

          <div className="list-item list-item--field">
            <div className="list-item-error-text animation-jelly"></div>
            <label className="list-item-label-text">Description</label>
            <textarea value={this.state.event.description}
                      onChange={this.eventPropChange("description")}></textarea>
          </div>

        </form>

        <div className="button-bar">
          <div className="button-bar-item button-bar-item--red-text" onClick={this.confirmEventDestroy}>Delete</div>
        </div>
      </div>
    );
  }
});

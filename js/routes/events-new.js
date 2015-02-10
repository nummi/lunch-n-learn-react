var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;
var Navigation = Router.Navigation;

module.exports = React.createClass({
  mixins: [Navigation],

  cancel() {
    this.transitionTo('events');
  },

  render() {
    return (
      <div className="screen">
        <div className="navigation-bar">
          <div className="navigation-bar-title">New Event</div>
          <span className="navigation-bar-button navigation-bar-button--left" onClick={this.cancel}>Cancel</span>
          <span className="navigation-bar-button navigation-bar-button--right navigation-bar-button--default" onClick={this.save}>Save</span>
        </div>
          <div className="list list--positioned __with-navigation-bar-above __with-button-bar-below">
            <form>

              <div className="list-item list-item--field">
                <div className="list-item-content">
                  <label className="list-item-label-text">Title</label>
                  <input />
                </div>
              </div>

              <div className="list-item list-item--field">
                <div className="list-item-content">
                  <label className="list-item-label-text">Date</label>
                  <input />
                </div>
              </div>

              <div className="list-item list-item--field">
                <div className="list-item-content">
                  <label className="list-item-label-text">Catering</label>
                  <input />
                </div>
              </div>

              <div className="list-item list-item--field">
                <div className="list-item-content">
                  <label className="list-item-label-text">Description</label>
                  <input />
                </div>
              </div>

            </form>
          </div>
      </div>
    );
  }
});

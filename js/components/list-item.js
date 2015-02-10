var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  destroyObject() {
    alert('destroy!');
  },

  render() {
    return (
      <div className="list-item list-item--with-image">

        <Link to="events-detail" params={{eventId: this.props.eventId}}  className="list-item-content">
          <div className="list-item-image">JN</div>
          <div className="list-item-title">Lunch 'n' Learn React</div>
          <div className="list-item-sub-title">
            Tuesday February 10th, 2015
            &ndash; Jerry Nummi
          </div>
        </Link>

        <div className="list-item-actions">
          <div className="list-item-action-delete" onClick={this.destroyObject}>Delete</div>
        </div>

      </div>
    );
  }
});

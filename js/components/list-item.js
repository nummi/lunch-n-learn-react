var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

module.exports = React.createClass({
  destroy() {
    alert('destroy!');
  },

  render() {
    return (
      <div className="list-item list-item--with-image">

        <Link to="events-show" params={{eventId: this.props.event.id}} className="list-item-content">
          <div className="list-item-image">{this.props.event.authorInitials}</div>
          <div className="list-item-title">{this.props.event.title}</div>
          <div className="list-item-sub-title">
            {this.props.event.date}
            &ndash; {this.props.event.authorName}
          </div>
        </Link>

        <div className="list-item-actions">
          <div className="list-item-action-delete" onClick={this.destroy}>Delete</div>
        </div>

      </div>
    );
  }
});

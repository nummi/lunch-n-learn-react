var React        = require('react');
var Router       = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route        = Router.Route;

var App          = require('./routes/app');
var Events       = require('./routes/events');
var EventsIndex  = require('./routes/events-index');
var EventsNew    = require('./routes/events-new');
var EventsDetail = require('./routes/events-detail');
var History      = require('./routes/history');
var Ideas        = require('./routes/ideas');
var Settings     = require('./routes/settings');

var routes = (
  <Route handler={App}>
    <Router.Redirect from="/" to="events" />

    <Route name="events" path="/events" handler={Events}>
      <DefaultRoute name="events-index" handler={EventsIndex}/>
      <Route name="events-new" path="/events/new" handler={EventsNew} />
      <Route name="events-detail" path="/events/:eventId" handler={EventsDetail} />
    </Route>

    <Route name="history"  path="/history"  handler={History} />
    <Route name="ideas"    path="/ideas"    handler={Ideas} />
    <Route name="settings" path="/settings" handler={Settings} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

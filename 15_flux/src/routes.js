var React = require('react');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
  <Route path="/" component={require('./app')}>
    <IndexRoute component={require('./components/AllCommentsPage')} />
    <Route path="/addComment" component={require('./components/AddCommentPage')} />
  </Route>
);

module.exports = routes;

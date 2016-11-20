var React = require('react');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var checkEntry = function(nextState, replace) {
  if (!confirm('Are you sure you want to view the comment details ?')) {
    replace('/');
  }
};

var routes = (
  <Route path="/" component={require('./app')}>
    <IndexRoute component={require('./components/AllCommentsPage')} />
    <Route path="/comment/:id" component={require('./components/CommentDetailPage')}
        onEnter={checkEntry}/>
  </Route>
);

module.exports = routes;

var React = require('react');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
  <div>
    <Route path='/' component={require('./app')}>
      <IndexRoute component={require('./components/AllCommentsPage')} />
      <Route path='/addComment' component={require('./components/AddCommentPage')} />
      <Route path='/comment/:id' component={require('./components/CommentDetailPage')} />
      <Redirect from='comments' to='/' />
      <Redirect from='coments' to='/' />
      <Route path='*' component={require('./components/NotFoundPage')} />
    </Route>
  </div>
);

module.exports = routes;

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var routes = require('./routes');

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
      document.getElementById('mycontainer'));

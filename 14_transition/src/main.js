var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('./routes');

ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
      document.getElementById('mycontainer'));

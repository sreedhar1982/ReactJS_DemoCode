var React = require('react');
var withRouter = require('react-router').withRouter;

var CommentDetail = withRouter(React.createClass({
  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  },
  routerWillLeave(nextLocation) {
    return 'Are you sure you want to leave this page ?'
  },
  render: function() {
    return (
      <div>
        <h2> Param Passed = {this.props.params.id} </h2>
      </div>
    );
  }
}));

module.exports = CommentDetail;


/*
statics: {
    willTransitionFrom: function (transition, element) {
      if (!confirm('Are you sure you want to leave this page ?')) {
        transition.abort();
      }
    },
    willTransitionTo: function (transition, params, query, callback) {
      if (!confirm('Are you sure you want to view the comment details ?')) {
        transition.abort();
      } else {
        callback();
      }
    },
}
*/

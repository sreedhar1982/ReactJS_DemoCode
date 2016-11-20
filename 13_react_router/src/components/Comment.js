var React = require('react');
var Link = require('react-router').Link;

var Comment = React.createClass({
  render: function() {
    var commentDetailPath = "/comment/" + this.props.id;
    return (
      <tr>
        <td><Link to={commentDetailPath}>{this.props.id}</Link></td>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
});

module.exports = Comment;

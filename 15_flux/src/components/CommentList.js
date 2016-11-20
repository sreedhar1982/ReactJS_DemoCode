var React = require('react');
var Comment = require('./Comment');
var CommentActions = require('../actions/CommentActions');

var CommentList = React.createClass({
  deleteComment: function(id) {
      CommentActions.deleteComment(id);
  },
  render: function() {
    var self = this;
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author} onDelete={self.deleteComment}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {commentNodes}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CommentList;

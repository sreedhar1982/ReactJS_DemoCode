var React = require('react');
var Comment = require('./comment');

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.id} author={comment.author}>
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

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var CommentForm = require('./CommentForm');
var AllCommentsPage = require('./AllCommentsPage');
var CommentActions = require('../actions/CommentActions');

var AddCommentPage = React.createClass({
    saveComment: function(comment) {
// F2:
        CommentActions.addComment(comment);
        browserHistory.push('/');
    },

    render: function() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
});

module.exports = AddCommentPage;

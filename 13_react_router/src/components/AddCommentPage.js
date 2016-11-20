var React = require('react');
var hashHistory = require('react-router').hashHistory;
var CommentForm = require('./CommentForm');
var AllCommentsPage = require('./AllCommentsPage');
var CommentApi = require('../data/CommentApi');

var AddCommentPage = React.createClass({
    saveComment: function(comment) {
        CommentApi.saveComment(comment);
        hashHistory.push('/');
    },

    render: function() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
});

module.exports = AddCommentPage;

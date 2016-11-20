var comments = require('./CommentData').comments;

var currentID = 3;

var CommentApi = {
	getAllComments: function() {
		return JSON.parse(JSON.stringify(comments));
	},
	saveComment: function(comment) {
    comment.id = ++currentID;
    comments.push(comment);
	}
};

module.exports = CommentApi;

var comments = require('./commentData').comments;
var _ = require('lodash');

var currentID = 3;
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var CommentApi = {
	getAllComments: function() {
		return _clone(comments);
	},
	saveComment: function(comment) {
    comment.id = ++currentID;
    comments.push(comment);
		return _clone(comment);
	},
	deleteComment: function(id) {
		_.remove(comments, { id: id});
	}
};

module.exports = CommentApi;

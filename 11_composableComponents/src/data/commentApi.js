var comments = require('./commentData').comments;

var CommentApi = {
	getAllComments: function() {
		console.log(JSON.parse(JSON.stringify(comments)));
		return JSON.parse(JSON.stringify(comments));
	}
};

module.exports = CommentApi;

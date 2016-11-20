var Dispatcher = require('../dispatcher/Dispatcher');
var CommentApi = require('../data/CommentApi');
var ActionTypes = require('../constants/ActionTypes');

var CommentActions = {
    addComment: function(comment) {
        var newComment = CommentApi.saveComment(comment);
        console.log("Dispatching Add Comment ...");
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_COMMENT,
            comment: newComment
        });
    },
    deleteComment: function(id) {
        CommentApi.deleteComment(id);
        console.log("Dispatching Delete Comment for id ..." + id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COMMENT,
            id: id
        });
    }
};

module.exports = CommentActions;

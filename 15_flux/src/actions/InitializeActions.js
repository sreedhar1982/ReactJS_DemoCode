var Dispatcher = require('../dispatcher/Dispatcher');
var CommentApi = require('../data/CommentApi');
var ActionTypes = require('../constants/ActionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                comments: CommentApi.getAllComments()
            }
        });
    }
};

module.exports = InitializeActions;

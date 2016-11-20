var React = require('react');
var Router = require('react-router').Router;
var CommentList = require('./commentList');
var CommentApi = require('../data/CommentApi');

var currentID = 3;

var AllCommentsPage = React.createClass({
    getInitialState: function() {
        return {
          comments: []
        };
    },
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ comments: CommentApi.getAllComments() });
        }
    },
    render: function() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentList comments={this.state.comments} />
                <br/>
            </div>
        );
    }
});

module.exports = AllCommentsPage;

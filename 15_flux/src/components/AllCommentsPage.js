var React = require('react');
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var CommentList = require('./CommentList');
var CommentStore = require('../stores/CommentStore');

var AllCommentsPage = React.createClass({
    getInitialState: function() {
        return {
// F1:
          comments: CommentStore.getAllComments()
        };
    },
    componentWillMount: function() {
        CommentStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        CommentStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
          this.setState({ comments: CommentStore.getAllComments() });
    },
    render: function() {
        return (
            <div>
                <h1>Comments - Using Flux</h1>
                <CommentList comments={this.state.comments} />
                <br/>
                <Link to="addComment">Add Comment</Link>
            </div>
        );
    }
});

module.exports = AllCommentsPage;

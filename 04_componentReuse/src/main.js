var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	render: function() {
		return <div>
					  <h1>Welcome to React</h1>
				   </div>;
	}
});

ReactDOM.render(
		<div>
			<ReactComponent/>
			<ReactComponent/>
			<ReactComponent/>
		</div>, document.getElementById('mycontainer'));

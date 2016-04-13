var React = require('react');
var ReactDOM = require('react-dom');

var AppHeader = (props) => {
	return (
		<div className="AppHeader">
			<ul className="state">
				<li>Health: 0</li>
				<li>${props.moneh}</li>
			</ul>
			<button onClick={props.makeMoneh}>MONEH</button>
		</div>
	);
};

module.exports = AppHeader;

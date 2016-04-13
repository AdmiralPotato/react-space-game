var React = require('react');
var ReactDOM = require('react-dom');
var AppHeader = require('./appHeader');
var GameCanvas = require('./gameCanvas');

var SpaceGame = React.createClass({
	getInitialState: () => {
		return {
			moneh: 0
		}
	},
	render: function() {
		var appHeaderProps = {
			moneh: this.state.moneh,
			makeMoneh: () => {
				this.setState({
					moneh: this.state.moneh + 1
				});
			}
		};
		return (
			<div className="SpaceGame">
				<AppHeader {...appHeaderProps} />
				<GameCanvas />
			</div>
		);
	}
});

module.exports = SpaceGame;

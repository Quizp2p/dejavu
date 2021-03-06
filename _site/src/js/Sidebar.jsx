//This contains the extra features like
//Import data, Export Data, Add document, Pretty Json
var React = require('react');
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var TypeTable = require('./TypeTable.jsx');
var QueryList= require('./QueryList/index.jsx');
var Importer = require('./features/Importer.jsx');

var Sidebar = React.createClass({
	getInitialState: function() {
		return {};
	},
	render: function() {
		return (
			<Tabs defaultActiveKey={1} id="dejavu-sidebar">
				<Tab 
					eventKey={1} 
					title="Types">
					<TypeTable {...this.props.typeProps} />
					<Importer />
				</Tab>
				<Tab 
					eventKey={2} 
					title="Queries">
					<QueryList {...this.props.queryProps} />
				</Tab>
			</Tabs>
		);
	}
});

module.exports = Sidebar;
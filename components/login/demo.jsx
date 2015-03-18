var renderUtils = require('brixo-framework/shared/utils/render');
require('../../shared/styles/demo-page.scss');

var React = require('react');
var Login = require('./login');

var DemoComponent = React.createClass({
    render () {
        return (
            <Login/>
        );
    }
});

renderUtils(DemoComponent);
module.exports = DemoComponent;
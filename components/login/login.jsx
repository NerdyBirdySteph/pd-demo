var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./login.scss');

var Login = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render () {
        var classes = new ClassMap('login');
        return (
            <div className={classes}>
                New Element: Login
            </div>
        );
    }
});

renderUtils(Login);
module.exports = Login;
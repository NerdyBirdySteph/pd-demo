var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./login.scss');

var Panel = require('brixo-ui/elements/panel');
var Header = require('brixo-ui/elements/header');
var Input = require('brixo-ui/elements/input');
var Button = require('brixo-ui/elements/button');

var Login = React.createClass({
    propTypes: {
        onLogin: React.PropTypes.func,
        isLoggingIn: React.PropTypes.bool
    },
    getDefaultProps () {
        return {
            isLoggingIn: false
        };
    },
    login(e) {
        var userName = this.refs.login_user.getValue();
        var userPass = this.refs.login_pass.getValue();
        this.props.onLogin && this.props.onLogin(userName, userPass);
    },
    render () {
        var classes = new ClassMap('login');
        var buttonText = this.props.isLoggingIn ? 'Logging in...' : 'Log in';
        return (
            <div className={classes}>
                <Panel>
                    <Header type="3">Login</Header>
                    <Input type="text" ref="login_user" placeholder="Username" icon="user" />
                    <Input type="password" ref="login_pass" placeholder="Password" icon="lock-closed" />
                    <Button role="cta" type="submit" onClick={this.login} disabled={this.props.isLoggingIn}>{buttonText}</Button>
                </Panel>
            </div>
        );
    }
});

renderUtils(Login);
module.exports = Login;
var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./application.scss');

var Login = require('components/login');
var Header = require('brixo-ui/elements/header');
var Panel = require('brixo-ui/elements/panel');
var Button = require('brixo-ui/elements/button');

var authenticationService = require('./authentication-service');

var Application = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    getInitialState() {
        return {
            isLoggingIn: false,
            loggedIn: false,
            user: null
        }
    },
    login(userName, userPass) {

        var userCredentials = {
            name: userName,
            pass: userPass
        };

        this.setState({
            isLoggingIn: true
        });

        authenticationService.login(userCredentials, function(err, userData) {
            this.setState({
                isLoggingIn: false,
                loggedIn: true, 
                user: userData
            });
        }.bind(this));

    },
    logout() {
        this.setState({
            loggedIn: false,
            user: null
        });
    },
    render () {
        var classes = new ClassMap('application');

        if(this.state.loggedIn) {
            return (
                <div className={classes}>
                    <Panel>
                        <Header type="3">Welcome {this.state.user.name}!</Header>
                        <Button role="neutral" onClick={this.logout}>Logout</Button>
                    </Panel>
                </div>
            );
        }

        return (
            <div className={classes}>
                <Login onLogin={this.login} isLoggingIn={this.state.isLoggingIn} />
            </div>
        );
    }
});

renderUtils(Application);
module.exports = Application;
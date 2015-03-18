
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Application = require('../index');
var authenticationService = require('../authentication-service');

describe('Application', function() {
    
    var stub1;
    var target, inputName, inputPass, btn;

    beforeEach(function() {
        stub1 = sinon.stub(authenticationService, 'login', function(payload, callback) {
            var username = payload.name;
            callback(null, {
                name: username
            });
        });
        target = TestUtils.renderIntoDocument(<Application />);
        inputName = target.getDOMNode().querySelector('input[type=text]');
        inputPass = target.getDOMNode().querySelector('input[type=password]');
        btn = target.getDOMNode().querySelector('button[type=submit]');
    });

    afterEach(function() {
        stub1.restore();
    });


    it('should render', function() {
        TestUtils.renderIntoDocument(<Application />);
    });

    it('should login', function() {
        TestUtils.Simulate.change(inputName, {target: {value: 'John Doe'}});
        TestUtils.Simulate.change(inputPass, {target: {value: 'password'}});
        TestUtils.Simulate.click(btn);
        expect(target.getDOMNode().innerHTML).to.contain('Logout');
    });

    it('should login - the correct user', function() {
        TestUtils.Simulate.change(inputName, {target: {value: 'foo123'}});
        TestUtils.Simulate.change(inputPass, {target: {value: 'password'}});
        TestUtils.Simulate.click(btn);
        expect(target.getDOMNode().innerHTML).to.contain('foo123');

    });

});

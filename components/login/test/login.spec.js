
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Login = require('../index');

describe('Login', function() {
    it('should render', function() {
        TestUtils.renderIntoDocument(<Login />);
    });
});

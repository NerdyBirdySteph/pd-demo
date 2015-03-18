exports.login = function(payload, callback) {

    // Simulate server-request
    setTimeout(function() {
        var username = payload.name;
        callback(null, {
            name: username
        });
    }, 2000);

};
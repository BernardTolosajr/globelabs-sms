var needle = require('needle');

module.exports = function(options) {
  var host = 'https://devapi.globelabs.com.ph';

  return {
    send: function(data, done) {
      if (!options) { throw new Error("missing options") };
      if (!data.address || !data.message) { throw new Error("missing data") };

      var url = host + '/smsmessaging/v1/outbound/' + options.senderAddress + '/requests?access_token=' + options.token;

      needle.post(url, data, {json: true}, function(err, response) {
        done(err, response);
      });
    }
  };
};

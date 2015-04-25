var expect = require('chai').expect,
    sinon = require('sinon'),
    needle = require('needle'),
    SMS = require('../index');

describe('SMS', function(){
  var mock = null;

  beforeEach(function() {
    mock = sinon.mock(needle);
  });

  afterEach(function() {
    mock.restore();
  });

  it('should be object', function() {
    var sms = SMS();
    expect(sms).to.be.ok;
  });

  it('should throw if no options is passed in', function() {
    var sms = SMS();
    expect(function() {
        sms.send({}, sinon.spy());
      }).to.throw('missing options');
  });

  describe('#send', function() {
    it('should call the needle.post', function() {
      var url = 'https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/5315/requests?access_token=1234';

      var data = {
        address: '09150000000',
        message: 'hello'
      };

      mock.expects('post')
        .once()
        .withArgs(url, data);

      var sms = SMS({senderAddress: '5315', token: '1234'})
      sms.send(data, sinon.spy());

      mock.verify();
    });

    it('should throw if no data is passed in', function() {
      var sms = SMS({senderaddress: '5315', token: '1234'})
      expect(function() {
          sms.send({}, sinon.spy());
        }).to.throw('missing data');
    });
  });
})

# globelabs-sms [![Build Status](https://travis-ci.org/BernardTolosajr/globelabs-sms.svg?branch=master)](https://travis-ci.org/BernardTolosajr/globelabs-sms)
Simple wrapper for globelabs SMS api

## Installation
```npm install globelabs-sms```

## Setup

```javascript
var SMS = require('globelabs-sms');
```

```javascript
//sending sms
var sms = SMS({senderAddress: '1234', token: 'SuCbrxI6n75bFko5ajI_lx5EK2ticlOS1VAI8fgaAy4'});
sms.send({address: '9159234344',message: 'hello from npm'}, function(err, response) {
  console.log(response);
});
```

see: [globelabs-api](https://docs.google.com/document/u/0/d/1xQYPFsWSnHY9htIYNL2bENLok8rbAgzxdXsFWbSwE80/pub?embedded=true) for sms docs



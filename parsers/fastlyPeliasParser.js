var URI = require('urijs');
var keyFromUri = require('../utility/keyFromUri.js');

module.exports = function parse(line) {
  var fields = line.split(' ');
  var timestamp = fields[0].substring(5);
  var status = fields[4];
  var payloadSize = fields[5];
  var method = fields[6];
  var fullPath = fields[7];
  var cacheHit = fields[8];
  var totalTime = fields[9];
  var firstByteSecs = fields[10];
  var uri = new URI(fullPath);

  return {
    ts: new Date(timestamp),
    status: status,
    payloadSize: payloadSize,
    method: method,
    uri: uri,
    key: keyFromUri(uri),
    cacheHit: cacheHit,
    totalTime: totalTime,
    firstByteTime: Number(firstByteSecs) * 1000,
    api: 'search',
    origin: 'fastly'
  };
};

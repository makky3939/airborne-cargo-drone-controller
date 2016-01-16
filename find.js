'use strict';

var noble = require('noble');

var scan = function() {
  noble.startScanning();

  noble.on('discover', function(peripheral) {
    console.log({
      name: peripheral.advertisement.localName,
      uuid: peripheral.uuid,
      rssi: peripheral.rssi
    });
  });
}

if (noble.state === 'poweredOn') {
  scan();
} else {
  noble.on('stateChange', scan);
}

'use strict';

var cylon = require('cylon');

cylon.robot({
  connections: {
    'keyboard': {
      adaptor: 'keyboard'
    },
    'rolling-spider': {
      adaptor: 'rolling-spider',
      uuid: 'uuid'
    }
  },
  devices: {
    keyboard: {
      driver: 'keyboard',
      connection: 'keyboard'
    },
    drone: {
      driver: 'rolling-spider',
      connection: 'rolling-spider'
    }
  },
  work: function (my) {
    var hover = function() {
      after(400, function () {
        my.drone.hover();
      });
    };

    my.keyboard.on('e', function(key) {
      my.log("e pressed!");
      my.drone.wheelOn();
  		my.drone.flatTrim();
  		my.drone.takeOff();
    });

    my.keyboard.on('q', function(key) {
      my.log("q pressed!");
      my.drone.land();
    });

    my.keyboard.on('up', function(key) {
      my.log("up pressed!");
      my.drone.forward();
      hover();
    });

    my.keyboard.on('down', function(key) {
      my.log("down pressed!");
      my.drone.backward();
      hover();
    });

    my.keyboard.on('left', function(key) {
      my.log("left pressed!");
      my.drone.left();
      hover();
    });

    my.keyboard.on('right', function(key) {
      my.log("right pressed!");
      my.drone.right();
      hover();
    });

    my.keyboard.on('w', function(key) {
      my.log("w pressed!");
      my.drone.up();
      hover();
    });

    my.keyboard.on('s', function(key) {
      my.log("w pressed!");
      my.drone.down();
      hover();
    });

    my.keyboard.on('a', function(key) {
      my.log("a pressed!");
      my.drone.counterClockwise();
      hover();
    });

    my.keyboard.on('d', function(key) {
      my.log("d pressed!");
      my.drone.clockwise();
      hover();
    });

    my.drone.on('battery', function() {
      my.log(my.drone.getBatteryLevel());
    });
  }
}).start();

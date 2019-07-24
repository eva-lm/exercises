'use strict';

const car = {
  gpsX: 10,
  gpsY: 30,

  move: (incrementX = 0, incrementY = 0) => {
    this.gpsX = this.gpsX + incrementX;
    this.gpsY = this.gpsY + incrementY;
  },

  showPosition: function () {
    console.log(`Car is in position x = ${this.gpsX}, y = ${this.gpsY}`);
  }
}

car.move(10, 15);
car.showPosition();

car.move(-50);
car.showPosition();

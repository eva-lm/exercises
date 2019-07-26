"use strict";

function getCircleAreaWithFunction(radius) {
  return Math.PI * radius * radius;
};

console.log(getCircleAreaWithFunction(100) + " metros cuadrados");

const getCircleAreaWithAnonymousFunction = function (radius) {
  return Math.PI * radius * radius
};

console.log(getCircleAreaWithAnonymousFunction(100) + " metros cuadrados");

const getCircleAreaWithArrowFunction = (radius) => Math.PI * radius * radius;

console.log(getCircleAreaWithArrowFunction(100) + " metros cuadrados");

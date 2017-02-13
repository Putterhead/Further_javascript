function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();

  // if (circle.radius() !== 10) {
  //   throw new Error("Circle size is not 10");
  // }
  assert.isTrue(circle.radius === 10);
};
console.log('hi');
testCircleRadiusDefaultsTo10();

it('defines globals like Node.js does', () => {
  expect(global.Array).toBeDefined();
  expect(global.Date).toBeDefined();
  expect(global.Error).toBeDefined();
  expect(global.Function).toBeDefined();
  expect(global.Math).toBeDefined();
  expect(global.Number).toBeDefined();
  expect(global.Object).toBeDefined();
  expect(global.RegExp).toBeDefined();
  expect(global.String).toBeDefined();
  expect(global.TypeError).toBeDefined();
});

const { EVENTS, cleanup } = require('./')

test('should be defined', () => {
  expect(EVENTS).toBeDefined()
  expect(cleanup).toBeDefined()
})

test('should export list of events', () => {
  expect(Array.isArray(EVENTS)).toBeTruthy()
})

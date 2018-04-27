// clock.test.js
import reducer from './clock'

describe('clock reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle UPDATE_TIME', () => {
    expect(
      reducer({}, {
        type: 'UPDATE_TIME'
      })
    ).toEqual({
        time: new Date().toLocaleTimeString()
    })
  })
})
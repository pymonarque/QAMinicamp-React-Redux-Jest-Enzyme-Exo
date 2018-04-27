import * as actions from './index'

describe('actions', () => {
  it('should return action to update time', () => {
    const expectedAction = {
      type: 'UPDATE_TIME'
    }
    expect(actions.updateTime()).toEqual(expectedAction)
  })
});


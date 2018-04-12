import rootReducer from './root-reducer.js'

describe('rootReducer', () => {

  it('should match snapshot', () => {
    expect(rootReducer).toMatchSnapshot()
  })
})
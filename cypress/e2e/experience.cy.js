describe('empty spec', () => {
  before(() => {
    console.info('Fonction appelée avant le premier tests')
  })

  beforeEach(() => {
    console.info('Fonction appelée avant chaque tests')
  })

  it('test 1', () => {
    console.info('Execution de la fionction du test 1')
  })

  it('test 2', () => {
    console.info('Execution de la fionction du test 2')
  })
})

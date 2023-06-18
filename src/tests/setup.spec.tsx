import { render } from '@testing-library/react'
import { App } from '../App'

describe('<App />', () => {
  it('should appear teste', () => {
    const { getByText } = render(<App />)
    expect(getByText('Testando')).toBeInTheDocument()
  })
})

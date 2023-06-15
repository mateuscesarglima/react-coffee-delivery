import { useState } from 'react'

export const App = () => {
  const arr = ['mateus', 'felipe', 'rodrigo']
  const [showText, setShowText] = useState(false)
  return (
    <div>
      <div>
        {arr.map((obj) => (
          <li key={obj}>{obj}</li>
        ))}
      </div>
      <button onClick={() => setShowText(!showText)}>Show text</button>
      {showText && <p>Apareci</p>}
    </div>
  )
}

import React from 'react'
import { render } from 'react-dom'
import './index.css'

const App = () => (
  <div className='p-1 w-96 h-96 bg-red-500'>
    Hello, world!
  </div>
)

render(<App />, document.getElementById('root'))

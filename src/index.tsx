import React, { FunctionComponent } from 'react'
import { render } from 'react-dom'
import './index.css'

const App: FunctionComponent = () => (
  <div className='p-1 w-96 h-96 bg-red-500'>
    Hello, world!
  </div>
)

render(<App />, document.getElementById('root'))

import React from 'react'
import { CssBaseline, Button } from '@material-ui/core'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='App'>
        <header className='App-header'>
          <Button variant='contained' color='primary'>
            Hello World
          </Button>
        </header>
      </div>
    </React.Fragment>
  )
}

export default App

import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CssBaseline, Button, Box, Card, List, ListItem, ListItemText } from '@material-ui/core'

import useStyles from './styles'

function App() {
  const [openList, setOpenList] = useState(false)
  const classes = useStyles()

  const toggleList = () => setOpenList(!openList)

  return (
    <React.Fragment>
      <CssBaseline />
      <Box m={2}>
        <Button variant='contained' color='primary' onClick={toggleList}>
          List with CSSTransition
        </Button>
        <CSSTransition
          in={openList}
          timeout={400}
          classNames={{
            enter: classes.listTransitionEnter,
            enterActive: classes.listTransitionEnterActive,
            exit: classes.listTransitionExit,
            exitActive: classes.listTransitionExitActive
          }}
          unmountOnExit
        >
          <Card>
            <List>
              <ListItem>
                <ListItemText primary='Feed the dog' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Cut hair' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Do the dishs' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Buy grossries' />
              </ListItem>
            </List>
          </Card>
        </CSSTransition>
      </Box>
    </React.Fragment>
  )
}

export default App

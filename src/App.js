import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CssBaseline, Button, Box, Collapse, Container, Slide, Paper } from '@material-ui/core'

import MyList from './components/MyList'
import useStyles from './styles'

function App() {
  const [openList, setOpenList] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [slide, setSlide] = useState(false)
  const classes = useStyles()

  const toggleList = () => setOpenList(prev => !prev)
  const toggleCollapse = () => setCollapse(prev => !prev)
  const toggleSlide = () => setSlide(prev => !prev)

  return (
    <React.Fragment>
      <CssBaseline />
      <Box m={2}>
        <Button className={classes.button} variant='contained' color='primary' onClick={toggleList}>
          List with CSSTransition
        </Button>
        <Container>
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
            <MyList />
          </CSSTransition>
        </Container>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={toggleCollapse}
        >
          List with Transition
        </Button>
        <Container>
          <Collapse in={collapse}>
            <MyList />
          </Collapse>
        </Container>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={toggleSlide}
        >
          Slide List
        </Button>
        <Container>
          <Slide in={slide} direction='up' mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <MyList />
            </Paper>
          </Slide>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default App

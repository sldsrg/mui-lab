import React, { useState } from 'react'

import { Button, Container, Box } from '@material-ui/core'
import MyList from './MyList'
import useStyles from '../styles'
import { CSSTransition } from 'react-transition-group'

function CSSTransitionPage() {
  const [openList, setOpenList] = useState(false)

  const classes = useStyles()

  const toggleList = () => setOpenList(prev => !prev)

  return (
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
    </Box>
  )
}

export default CSSTransitionPage

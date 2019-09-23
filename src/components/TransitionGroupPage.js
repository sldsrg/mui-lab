import React, { useState } from 'react'
import { Button, Container, Box, Typography } from '@material-ui/core'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import useStyles from '../styles'

function TransitionGroupPage() {
  const [items, setItems] = useState(['item #1'])

  const classes = useStyles()

  const addItem = () => setItems(prev => [...prev, `Item #${prev.length + 1}`])
  const removeLastItem = () => setItems(prev => prev.slice(0, prev.length - 1))

  return (
    <Box m={2}>
      <Button className={classes.button} variant='contained' color='primary' onClick={addItem}>
        Add Item
      </Button>{' '}
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={removeLastItem}
      >
        Remove last Item
      </Button>
      <Container>
        <TransitionGroup>
          {items.map(item => (
            <CSSTransition
              key={item}
              timeout={400}
              classNames={{
                enter: classes.listTransitionEnter,
                enterActive: classes.listTransitionEnterActive,
                exit: classes.listTransitionExit,
                exitActive: classes.listTransitionExitActive
              }}
              unmountOnExit
            >
              <Typography variant='h1'>{item}</Typography>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    </Box>
  )
}

export default TransitionGroupPage

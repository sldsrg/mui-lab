import React, { useState } from 'react'
import { Button, Box, Slide, Container, Paper, Typography } from '@material-ui/core'

import useStyles from '../styles'

function DoubleSlidePage() {
  const [open, setOpen] = useState(true)
  const [count, setCount] = useState(1)

  const classes = useStyles()

  const toggle = () => {
    setOpen(false)
  }
  const next = () => {
    setOpen(true)
    setCount(prev => prev + 1)
  }

  return (
    <Box m={2}>
      <Button className={classes.button} variant='contained' color='primary' onClick={toggle}>
        Double Slide
      </Button>
      <Container className={classes.container}>
        <Slide
          in={open}
          direction={open ? 'left' : 'right'}
          onExited={next}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={4} className={classes.paper}>
            <Typography align='center' variant='h1'>
              {count}
            </Typography>
          </Paper>
        </Slide>
        {/* <Slide in={openList} direction={openList ? 'right' : 'left'} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <Typography align='center' variant='h1'>
              {openList ? count : count - 1}
            </Typography>
          </Paper>
        </Slide> */}
      </Container>
    </Box>
  )
}

export default DoubleSlidePage

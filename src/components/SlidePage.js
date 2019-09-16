import React, { useState } from 'react'
import { Button, Box, Slide, Container, Paper } from '@material-ui/core'

import MyList from './MyList'
import useStyles from '../styles'

function SlidePage() {
  const [openList, setOpenList] = useState(false)

  const classes = useStyles()

  const toggleList = () => setOpenList(prev => !prev)

  return (
    <Box m={2}>
      <Button className={classes.button} variant='contained' color='primary' onClick={toggleList}>
        Slide List
      </Button>
      <Container>
        <Slide in={openList} direction='right' mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <MyList />
          </Paper>
        </Slide>
      </Container>
    </Box>
  )
}

export default SlidePage

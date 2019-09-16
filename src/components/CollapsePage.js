import React, { useState } from 'react'
import { Button, Box, Collapse, Container } from '@material-ui/core'

import MyList from './MyList'
import useStyles from '../styles'

function CollapsePage() {
  const [openList, setOpenList] = useState(false)

  const classes = useStyles()

  const toggleList = () => setOpenList(prev => !prev)

  return (
    <Box m={2}>
      <Button className={classes.button} variant='contained' color='primary' onClick={toggleList}>
        Collapse List
      </Button>
      <Container>
        <Collapse in={openList}>
          <MyList />
        </Collapse>
      </Container>
    </Box>
  )
}

export default CollapsePage

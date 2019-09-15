import React from 'react'
import { Card, List, ListItem, ListItemText } from '@material-ui/core'

function MyList(props) {
  return (
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
  )
}

export default MyList

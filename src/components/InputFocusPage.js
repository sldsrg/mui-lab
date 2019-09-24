import React, { createRef, useState, useEffect } from 'react'
import { Paper, Grid, TextField } from '@material-ui/core'
import useStyles from '../styles'

function InputFocusPage(props) {
  const [refs, setRefs] = useState(new Array(6).fill(null).map(() => createRef()))
  const [autoFocusIndex, setAutoFocusIndex] = useState(0)
  const classes = useStyles()

  useEffect(() => {}, [refs])

  const handleKey = index => event => {
    if ([9, 13].includes(event.keyCode)) {
      event.preventDefault()
      let next = index + (event.shiftKey ? -1 : 1)
      if (next >= refs.length) {
        if (refs[index].current.value) {
          setRefs([...refs, createRef(), createRef(), createRef()])
          setAutoFocusIndex(next)
        } else {
          // TODO: exit from continuous input
          // outerRef.current.focus()
        }
      } else {
        if (next < 0) next = refs.length + next
        refs[next].current.focus()
      }
    }
  }
  const labels = ['width', 'height', 'count']
  return (
    <Paper>
      <Grid container justify='center' spacing={2}>
        {refs.map((ref, index) => (
          <Grid key={index} item sm={4}>
            <TextField
              className={classes.textField}
              label={labels[index % 3]}
              autoFocus={index === autoFocusIndex}
              inputRef={ref}
              onKeyDown={handleKey(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default InputFocusPage

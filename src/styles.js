import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  listTransitionEnter: {
    opacity: 0,
    transform: 'scale(0.1)'
  },

  listTransitionEnterActive: {
    opacity: 1,
    transform: 'scale(1.0)',
    transition: 'all 400ms'
  },

  listTransitionExit: {
    opacity: 1,
    transform: 'scale(1.0)'
  },

  listTransitionExitActive: {
    opacity: 0,
    transform: 'scale(0.1)',
    transition: 'all 400ms'
  },

  root: {
    height: 180
  },

  wrapper: {
    width: 300
  },

  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1)
  },

  button: {
    margin: theme.spacing(2)
  }
}))

export default useStyles

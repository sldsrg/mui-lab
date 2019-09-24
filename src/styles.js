import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative'
  },

  page: {
    position: 'absolute',
    left: 15,
    right: 15
  },

  pageEnter: {
    opacity: 0,
    transform: 'scale(1.1)'
  },

  pageEnterActive: {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 300ms, transform 300ms'
  },

  pageExit: {
    opacity: 1,
    transform: 'scale(1)'
  },

  pageExitActive: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms'
  },

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
    display: 'flex'
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  toolbar: theme.mixins.toolbar,

  wrapper: {
    width: 300
  },

  paper: {
    // zIndex: 1,
    // position: 'relative',
    // margin: theme.spacing(1)
    position: 'absolute',
    left: 15,
    right: 15
  },

  button: {
    margin: theme.spacing(2)
  },

  activeLink: {
    backgroundColor: theme.palette.background.default
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

export default useStyles

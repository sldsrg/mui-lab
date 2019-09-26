import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItem,
  List
} from '@material-ui/core'
import * as Icons from '@material-ui/icons'

import useStyles from './styles'
import CSSTransitionPage from './components/CSSTransitionPage'
import CollapsePage from './components/CollapsePage'
import SlidePage from './components/SlidePage'
import InputFocusPage from './components/InputFocusPage'
import HomePage from './components/HomePage'
import DoubleSlidePage from './components/DoubleSlidePage'
import TransitionGroupPage from './components/TransitionGroupPage'

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/InputFocus', name: 'Input Focus', Component: InputFocusPage },
  { path: '/TransitionGroup', name: 'TransitionGroup', Component: TransitionGroupPage },
  { path: '/CSSTransition', name: 'CSSTransition', Component: CSSTransitionPage },
  { path: '/Collapse', name: 'Collapse', Component: CollapsePage },
  { path: '/Slide', name: 'Slide', Component: SlidePage },
  { path: '/DoubleSlide', name: 'Double Slide', Component: DoubleSlidePage }
]

function App() {
  const classes = useStyles()

  const NavLinkAdapter = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />)

  return (
    <>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
              <Typography variant='h6' noWrap>
                MUI Labs
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List component='nav'>
              {routes.map(({ name, path }) => (
                <ListItem
                  key={path}
                  className={classes.link}
                  button
                  component={NavLinkAdapter}
                  to={path}
                  exact
                >
                  <ListItemIcon>
                    <Icons.MoveToInbox />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.container}>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames={{
                        enter: classes.pageEnter,
                        enterActive: classes.pageEnterActive,
                        exit: classes.pageExit,
                        exitActive: classes.pageExitActive
                      }}
                      unmountOnExit
                    >
                      <div className={classes.page}>
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </div>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App

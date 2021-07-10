import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './Components/Profile/Profile';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container className={'mt_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Switch>
                <Router path='/portfolio'>
                  <Portfolio />
                </Router>
                <Router path='/'>
                  <Resume />
                </Router>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

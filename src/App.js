import React, { useState } from 'react';
import { HashRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

import './App.css';
import { motion } from 'framer-motion';

function App() {
  const [owner] = useState('Gilberto Gaspar');
  const [socials] = useState({
    github: 'https://github.com/GilbertoGaspar',
    linkedin: 'https://www.linkedin.com/in/gaspargilberto/',
    email: 'gilbertogaspar1996@gmail.com',
  });
  const [pages] = useState({
    home: {
      title: 'Be Relentless',
      subTitle: 'Projects that make a difference',
    },
    about: {
      title: 'About Me',
    },
    contact: {
      title: 'Lets Talk',
    },
    projects: {
      title: 'My Projects',
    },
  });

  const { home, about, contact, projects } = pages;

  return (
    <HashRouter basename='/'>
      <Container className='p-0' fluid={true}>
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>
            <Link className='g-navbar-brand-link' to='/'>
              Gilberto Gaspar
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <NavLink exact className='nav-link' to='/'>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, stiffness: 300 }}
                >
                  Home
                </motion.div>
              </NavLink>
              <NavLink className='nav-link' to='/projects'>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, stiffness: 300 }}
                >
                  Projects
                </motion.div>
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, stiffness: 300 }}
                >
                  About
                </motion.div>
              </NavLink>
              <NavLink className='nav-link' to='/contact'>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, stiffness: 300 }}
                >
                  Contact
                </motion.div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={home.title}
                subTitle={home.subTitle}
                text={home.text}
              />
            )}
          />
          <Route
            path='/about'
            render={() => <AboutPage title={about.title} />}
          />
          <Route
            path='/projects'
            render={() => <ProjectsPage title={projects.title} />}
          />
          <Route
            path='/contact'
            render={() => <ContactPage title={contact.title} />}
          />
          <Route render={() => <h1>404 Page</h1>} />
        </Switch>
        <Footer owner={owner} socials={socials} />
      </Container>
    </HashRouter>
  );
}

export default App;

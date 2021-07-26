import React from 'react';
import LogoMark from './Components/LogoMark';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../src/Pages/Home';
import AboutMe from '../src/Pages/AboutMe';
import Error404 from './Pages/Error404';
import { AnimatePresence, motion } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <motion.main
        initial={{ perspective: '1000px' }}
        className='py-16 h-full relative'
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path={['/', '/home']} exact component={Home}></Route>
            <Route path='/about-me' component={AboutMe}></Route>
            <Route path='*' component={Error404}></Route>
          </Switch>
        </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  );
}

export default App;

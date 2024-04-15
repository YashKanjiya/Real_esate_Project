import Headers from './components/Header';
import Footer from './components/Footer';

import {DarkModeProvider} from './components/DarkModeContext';
import Hero from './sections/Hero';
import About from './sections/About';
import PopularArea from './sections/PopularArea';
import Properties from './sections/Properties';
import Services from './sections/Services';
import Client from './sections/Client';
import Contact  from './sections/Contact';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <DarkModeProvider>
        <Headers/>
        <Hero/>
        <About/>
        <PopularArea/>
        <Properties/>
        <Services/>
        <Client/>
        <Contact/>
        <Footer/>
      </DarkModeProvider>
      </>
    )
  }
}




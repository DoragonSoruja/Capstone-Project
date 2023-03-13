import './App.css';
import Header from "./components/header"
import Navigation from './components/nav';
import Main from './components/main';
import Specials from './components/specials';
import Testimonials from './components/testimonials';
import AboutMe from './components/aboutme';
import Footer from './components/footer';
import BookingPage from './components/BookingPage';
import React from "react"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Main />
      <Specials />
      <Testimonials />
      <AboutMe />
      <BookingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;

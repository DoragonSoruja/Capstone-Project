import './App.css';
import Header from "./components/header"
import Navigation from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import React from "react"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;

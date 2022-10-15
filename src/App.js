import './App.css';
import Home from './Components/Home/Home';
import { useState, useEffect } from 'react';
import About from './Components/About/About';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';

function App() {

  const [progress, setProgress] = useState(0);
  const wave = String.fromCodePoint(0x1F44B);

  useEffect(() => {
    setProgress(0);
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 400);
    console.log
      (
        wave
        + ' Hello Viewer!!! '
        + '%cHave a nice day!',
        `font-size: 20px; background-color: yellow; margin-top: 10px; color:red;`
      );
  }, []);

  return (
    <>
      <LoadingBar
        height={4}
        color='#f11946'
        loaderSpeed={450}
        progress={progress}
      />
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <header>
          <Navbar />
        </header>
        <main className='site-main'>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

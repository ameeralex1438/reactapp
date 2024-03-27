import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Body/Home';
import About from './components/Body/About';
import Services from './components/Body/Services';
import Cases from './components/Body/Case';
import Contact from './components/Body/Contact';
function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='about' exact Component={About}/>
        <Route path='services' exact Component={Services}/>
        <Route path='cases' exact Component={Cases}/>     
        <Route path='contact' exact Component={Contact}/>
      </Routes>
     </Router>
     <Footer/>
     
    </div>
  );
}

export default App;

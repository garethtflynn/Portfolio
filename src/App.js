import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'


function App() {
    return (
        <div className=''>
        <Header/>
        <Navbar/>
        <AboutMe/>
        <Contact/>
        <Portfolio/>
        <Footer/>
        </div>
    );
}

export default App;

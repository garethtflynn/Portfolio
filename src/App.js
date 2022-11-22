import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'


function App (){
    return (
        <div className=''>
            <Header/>
            <Navbar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Resume/>
            <Contact/>
            <Footer/>
            {/* <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script> */}
        </div>
    )
}

export default App;

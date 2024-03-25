import Header from '../../components/Header'
import About from './About'
import Contact from './Contact'
import Experinces from './Experinces'
import Intro from './Intro'
import Projects from './Projects'

export default function Home() {
  return (
    <div>
        <Header />
        <div className='bg-primary px-40 sm:px-5'>
            <Intro />
            <About />
            <Experinces />
            <Projects />
            <Contact />
        </div>
    </div>
  )
}   

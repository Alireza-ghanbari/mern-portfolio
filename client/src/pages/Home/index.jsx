import Header from '../../components/Header'
import About from './About'
import Intro from './Intro'

export default function Home() {
  return (
    <div>
        <Header />
        <div className='bg-primary px-40'>
            <Intro />
            <About />
        </div>
    </div>
  )
}   

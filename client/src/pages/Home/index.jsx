import Header from '../../components/Header'
import Intro from './Intro'

export default function Home() {
  return (
    <div>
        <Header />
        <div className='bg-primary px-40'>
            <Intro />
        </div>
    </div>
  )
}   

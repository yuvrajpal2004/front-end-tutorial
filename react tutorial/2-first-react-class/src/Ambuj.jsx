import './Ambuj.css'
import Hero from './component/Hero'
import Nav from './component/nav'
import Footer from './component/footer'
function Ambuj() {
 
  return (
    <>
      <div className="box">
        <Nav/>
        <Hero/>
        <Footer/>
      </div>
    </>
  )
}

export default Ambuj
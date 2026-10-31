import ima1 from "../assets/ima1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

function Hero() {
  return (
    <div>
      <div className="main">
          <img src={ima1} alt="" width="170px" height="210px" />
          <img src={img2} alt="" width="170px" height="210px" />
          <img src={img3} alt="" width="170px" height="210px" />
        </div>
    </div>
  )
}


export default Hero





import './Homepage.css'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Card from '../../Components/Card/Card';
import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'

const Homepage = () => {
  const cardDetails = [{
    img: image1,
    heading: 'Desserts',
    text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: 'Explore Menu'
  },
  {
    img: image2,
    heading: 'Breakfast',
    text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: 'Explore Menu'
  },{
    img: image3,
    heading: 'Main Dishes',
    text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: 'Explore Menu'
  },{
    img: image4,
    heading: 'Drinks',
    text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    link: 'Explore Menu'
  },
]
  return (
    <div>
        <div className='top-menu'>
            <div className='left-col'>
                <div className='tele-ico'><BsTelephone /> <p>(414) 857 - 0107</p></div>
                <div className='message-ico'><AiOutlineMail /> <p>yummy@bistrobliss</p></div>
            </div>
            <div className='right-col'>
               <AiFillTwitterCircle className='twitter'/>
               <FaFacebook />
               <FaInstagram />
               <FaGithub />
            </div>
        </div>
        <Navbar />
        <Hero />
        <div className='card-section'>
          <h2 className='browse'>Browse Our Menu</h2>
          <div className='card-box'>
            {
              cardDetails.map((item, i) => {
                return <Card item={item}/>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Homepage
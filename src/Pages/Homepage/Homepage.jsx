import './Homepage.css'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Navbar from '../../Components/Navbar/Navbar';

const Homepage = () => {
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
    </div>
  )
}

export default Homepage
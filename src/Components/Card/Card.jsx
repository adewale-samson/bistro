import './Card.css'
import image1 from '../../assets/img1.png'

const Card = ({item}) => {
    console.log(item);
  return (
    <div className='card-container'>
        <div className='img-container'>
            <img src={item.img} alt='img icon' className='card-img' />
        </div>
        <h3 className='card-heading'>{item.heading}</h3>
        <p className='card-text'>{item.text}</p>
        <a href='#' className='card-link'>{item.link}</a>
    </div>
  )
}

export default Card
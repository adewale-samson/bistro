import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-items'>
            <h1 className='hero-heading'>
                Best food for your taste
            </h1>
            <p className='hero-text'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className='hero-btn'>
              <button className='btn-book'>Book A Table</button>
              <button className='btn-explore'>Explore Menu</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    // const data = [{image: logo, heading: 'Breakfast', text: 'dfgvbvjhjhdfd',},{image: logo1},{image: logo2},{image: logo3}]
  return (
    <header className='header-container'>
        <div className='logo-div'>
            <img src={logo} alt='logo' className='logo' />
        </div>
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pages</li>
                <li>Pages</li>
            </ul>
        </nav>
        <button className='header-btn'>Book A Table</button>
    </header>
  )
}

export default Navbar
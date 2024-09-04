import logo from '../assets/JeovanMillsLogo2.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
// add import twitter 

const Navbar = () => {
  return (
    // turns back ground color for my logo and for my initals red which are Jm for Navbar
    // mb:margin bottom was added to change something with the navbar between red and flex
    <nav className='mb-20 flex items-center justify-between py-6'>
        {/* comment about changing the logo size with max width 14 */}

        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        {/* for the icons i will be using for my socials */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jeovan-mills-b1a3aa314"><FaLinkedin /></a>
            <a href="https://github.com/jmacker101"><FaGithub /></a>
            {/* add twitter and instagram downbelow this line */}
        </div>
    </nav>
  )
}

export default Navbar
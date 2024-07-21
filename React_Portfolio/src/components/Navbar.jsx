import logo from '../assets/JeovanMillsLogo2.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutubeSquare } from 'react-icons/fa';
const Navbar = () => {
  return (
    // turns back ground color for my logo and for my initals red which are Jm for Navbar
    // mb -20 was added to change something with the navbar between red and flex
    <nav className='flex items-center justify-between py-8 max-h-9'>
        {/* comment about changing the logo size with max width 14 */}
    <div className='flex flex-shrink-0 items-center max-w-14'>
    <img src={logo} alt='logo' />
    </div>
    {/* for the icons i will be using for my socials */}
    <div className='m-8 flex items-center justify-center gap-4 text-2x1'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaYoutubeSquare />
    
    </div>
   </nav>
  )
}

export default Navbar
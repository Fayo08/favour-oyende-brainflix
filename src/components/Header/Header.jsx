import playIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
// import Search from '../Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/Icons/search.svg'





import './Header.scss'
import Homepage from '../../pages/Homepage/Homepage';


const Header = () => {

const navigateTo = useNavigate()

const handleButtonClick = () => {
navigateTo('/upload')
}

const handleLogoClick = () => {
  navigateTo('/')
  }
  
    return (
        <div className='Header'>
            <img onClick={handleLogoClick} src={playIcon} alt="logo" className="Header__logo" />
            <div className='Header__content'>
            <form className="Header__form" >
            <div >
              <label htmlFor="name">
                <img className='Header__form--icon' src={searchIcon} alt="Search Icon" />
              <input
                type="text"
                id="name"
                placeholder="Search"
                className="Header__form--control"
                name="name"
              />
              </label>
            </div>
               <button onClick={handleButtonClick} className='Header__upload' ><span className='Header__upload--icon'><img src= {uploadIcon} alt="upload icon" /></span> UPLOAD</button>
               </form>
               
                <div className='Header__avatar--container'>
                    <img src= {avatar} alt="Avatar" className='Header__avatar' />
                </div>
                
                </div>
            </div>
    );
};

export default Header;
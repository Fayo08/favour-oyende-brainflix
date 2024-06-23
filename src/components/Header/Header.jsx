<<<<<<< Updated upstream
import playIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
// import Search from '../Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/Icons/search.svg'





import './Header.scss'
import Homepage from '../../pages/Homepage/Homepage';
=======
import playIcon from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/Icons/search.svg";
>>>>>>> Stashed changes

import "./Header.scss";

const Header = () => {
  const navigateTo = useNavigate();

  const handleButtonClick = () => {
    navigateTo("/upload");
  };

<<<<<<< Updated upstream
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
=======
  return (
    <div className="Header">
      <Link to="/">
        <img src={playIcon} alt="logo" className="Header__logo" />
      </Link>
      <div className="Header__group"> 
      <div className="Header__content">
        <form className="Header__form">
          <div>
            <label htmlFor="name">
            
>>>>>>> Stashed changes
              <input
                type="text"
                id="name"
                placeholder="Search"
                className="Header__form__control"
                name="name"
              />
            </label>
          </div>
        </form>

      <button onClick={handleButtonClick} className="Header__upload">
            <span className="Header__upload--icon">
              <img src={uploadIcon} alt="upload icon" />
            </span>{" "}
            UPLOAD
          </button>
          </div>
        <div className="Header__avatar--container">
          <img src={avatar} alt="Avatar" className="Header__avatar" />
        </div>
        </div>
     
    </div>
  );
};

export default Header;
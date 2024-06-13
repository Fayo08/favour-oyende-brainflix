import playIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import Search from '../Search/Search';




import './Header.scss'


const Header = () => {
    return (
        <div className='Header'>
            <img src={playIcon} alt="logo" className="Header__logo" />
            <div className='Header__content'>
            <div className='Header__container'>
              <Search/>
                <button className='Header__upload' ><span><img src= {uploadIcon} alt="upload icon" /></span> UPLOAD</button>
                </div>
                <div className='Header__avatar--container'>
                    <img src= {avatar} alt="Avatar" className='Header__avatar' />
                </div>
                
                </div>
            </div>
    );
};

export default Header;
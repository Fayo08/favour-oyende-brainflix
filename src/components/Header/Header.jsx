import playIcon from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';




import './Header.scss'


const Header = () => {
    return (
        <div className='Header'>
            <img src={playIcon} alt="logo" className="Header__logo" />
            <div className='Header__content'>
            <div className='Header__container'>
                <input type="search" name="search" id="seardID"  placeholder='Search' className='Header__searchInput'/>
                <label htmlFor="search" className='Search button'></label>
                
                <div className='Header__avatar--container'>
                    <img src= {avatar} alt="Avatar" className='Header__avatar' />
                </div>
                </div>

                <div className='Header__upload--container'>
                    
                    <button className='Header__upload' ><span><img src= {uploadIcon} alt="upload icon" /></span> UPLOAD</button>
                    
                </div>
                </div>
            </div>
    );
};

export default Header;
import React from 'react';
import './Search.scss'
import searchIcon from '../../assets/Icons/search.svg'

function Search(props) {
    return (
        <div>
              
                <label htmlFor="search" className='Search button'>
                    <input type="search" src= {searchIcon} name="search" id="seardID"  placeholder='Search' className='searchInput'/>
                    </label>
        </div>
    );
}

export default Search;
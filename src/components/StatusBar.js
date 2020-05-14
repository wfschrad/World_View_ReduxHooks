import React, { useContext } from 'react';

import CountrySelect from './CountrySelect';


const StatusBar = () =>
 (
        <div className='status-bar'>
            <div className='status-bar__left'>
                {/* <label className='status-bar-select-label'>Choose a Country:</label> */}
                <CountrySelect/></div>
            <span className='status-bar__center'>

            {/* Use button to produce modal??? */}
            {/* <datalist id='status-bar-countrySelect'>
                {options=selectCountries}
            </datalist>
            <input className='status-bar__select' autoComplete='on' list='status-bar-countrySelect'/> */}
            </span>
            <div className='status-bar__right'>
            </div>
        </div>
    )

export default StatusBar;

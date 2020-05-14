import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CountrySelect from './CountrySelect';


const StatusBar = () => {
    const currCountry = useSelector((state) => state.currCountry);
    const currCategory = useSelector((state) => state.currCategory);
    const currKeyword = useSelector((state) => state.currKeyword);
    return (
            <div className='status-bar'>
                <div className='status-bar__left'>
                    {/* <label className='status-bar-select-label'>Choose a Country:</label> */}
                    {/* <CountrySelect/> */}
                    </div>
                <span className='status-bar__center'>
                    <span className='statusEl'>Current Country: <span className='statusEl__result'>{currCountry.toUpperCase()}</span></span>
                    <span className='statusEl'>Current Category: {currCategory === 'none'
                            ? "" : <span className='statusEl__result'>{currCategory.toUpperCase()}</span>}</span>
                    <span className='statusEl'>Current Topic: {currKeyword === 'none'
                            ? "" : <span className='statusEl__result'>{currKeyword.toUpperCase()}</span>}</span>
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
}

export default StatusBar;

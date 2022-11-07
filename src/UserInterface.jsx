import React from 'react'
import Header from './Header.jsx'
import SearchContainer from './SearchContainer.jsx'
import Suggestions from './Suggestions.jsx'
 
function UserInterface({clickHandler}) {
 

    return (
        <div className='ui'>
            <Header />
            <SearchContainer clickHandler={clickHandler}/>
            <Suggestions clickHandler={clickHandler}/>
        </div>
    )
}

export default UserInterface
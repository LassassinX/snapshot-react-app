import React from 'react'
import { useState } from 'react'

function SearchContainer({ clickHandler }) {

    const keyboardPress = (key) => {
        if (key.code === 'Enter') {
            clickHandler(document.querySelector('input').value)
        }
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search" onKeyDownCapture={keyboardPress} />
            <button className='search-button' onClick={() => {
                clickHandler(document.querySelector('input').value)
            }}>
                🔎︎
            </button>
        </div>
    )
}

export default SearchContainer
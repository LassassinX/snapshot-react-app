import React from 'react'

function Pagination({ pages,currentPage, nextPage, prevPage, nextPageClickHandler, prevPageClickHandler }) {

    return (
        <div className="pagination">
            {prevPage && <button onClick={prevPageClickHandler}>←</button>}
            <p>
                Page {currentPage} of {pages}
            </p>
            {nextPage && <button onClick={nextPageClickHandler}>→</button>}
        </div>
    )
}

export default Pagination
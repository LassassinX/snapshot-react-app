import PictureGrid from './PictureGrid.jsx'
import UserInterface from './UserInterface.jsx'
import Pagination from './Pagination.jsx'
import { useState } from 'react'


const API_KEY = '563492ad6f91700001000001fa0385dd465f4b22aa27ac02774313ea'

const API = 'https://api.pexels.com/v1/search?query='

export default function App() {
    const [pictures, setPictures] = useState([])
    const [pages, setPages] = useState(0)
    const [nextPage, setNextPage] = useState('')
    const [prevPage, setPrevPage] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, isLoading] = useState(false)

    const options = {
        headers: {
            Authorization: API_KEY
        },
        method: 'GET',
    }

    async function search(value) {
        const url = API + value

        callApi(url)
    }

    async function callApi(url) {
        isLoading(true)
        const response = await fetch(url, options)
            .then(response =>
                response.json()
            ).then((data) =>
                data
            )

        let urls = []

        response.photos.forEach((photo) => {
            urls.push(photo.src.medium)
        })

        setPictures(urls)
        setPages(Math.ceil(response.total_results / response.per_page))

        setNextPage(response.next_page)
        setPrevPage(response.prev_page)
        setCurrentPage(response.page)
        isLoading(false)
    }

    function nextPageClickHandler() {
        callApi(nextPage)
    }

    function prevPageClickHandler() {
        callApi(prevPage)
    }

    function zoom(e) {
        console.log(e);
        e.classList.toggle('zoom')
    }

    return (
        <>  
            <UserInterface clickHandler={search} />
            {!loading && <PictureGrid pictures={pictures} clickHandler={zoom}/>}
            {loading && <div className="lds-hourglass"></div>}
            {!loading && pages > 1 &&
                <Pagination
                    pages={pages}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                    nextPageClickHandler={nextPageClickHandler}
                    prevPageClickHandler={prevPageClickHandler}
                />
            }
        </>
    )
}
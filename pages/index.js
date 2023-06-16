/********************************************************************************** 
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Huu Tinh Luu Student ID: 152712196 Date: 6/16/2023
 * Link: https://singular-pastelito-7aae13.netlify.app
 *********************************************************************************/
import useSWR from 'swr'
import { useState,useEffect } from 'react'
import { Pagination,Accordion } from 'react-bootstrap'
import MovieDetails from '@/components/MovieDetails'
import PageHeader from '@/components/PageHeader'

export default function Home() {
    const [page, setPage] = useState(1)
    const [pageData, setPageData] = useState([])

    const { data, error } = useSWR(`https://good-teal-millipede-garb.cyclic.app/api/movies?page=${page}&perPage=10`)
    useEffect(() => {
        if (data) {
            setPageData(data)
        }
    }, [data])

    const previos = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const next = () => {
            setPage(page + 1);
    }

    return (
        <div>
            <PageHeader text="Film Collection : Sorted by Date" /> 
            <Accordion>
                {pageData.map((movie) => (
                    <Accordion.Item eventKey={movie._id} key={movie._id}>
                        <Accordion.Header>
                            <strong>{movie.title}</strong> &nbsp; ({movie.year})
                            Directors: {movie.directors.join(', ')}
                            </Accordion.Header>
                        <Accordion.Body>
                            <MovieDetails movie={movie} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <Pagination>
                <Pagination.Prev onClick={previos} />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={next} />
            </Pagination>
        </div>
    )

}

import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies, getAllMovies } from '../../features/movies/movieSlice';
import { useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        const movieText = "Bean"
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}`)

            dispatch(addMovies(response.data))
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <div className="banner-image"></div>

            <MovieListing />
        </div>
    );
};

export default Home;
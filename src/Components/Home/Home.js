import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/movieApiKey';

const Home = () => {

    useEffect(() => {
        const movieText = "Bean"
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}`)
            console.log('API response', response.data.Search);
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
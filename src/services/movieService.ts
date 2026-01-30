import axios from 'axios';
import type { Movie } from '../types/movie';

const myKey = import.meta.env.VITE_TMDB_API_KEY;

interface HttpsMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

async function fetchMovies(query: string, page: number) {
  const response = await axios.get<HttpsMovieResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
      params: {
        query,
        page,
      },
    }
  );
  return response.data;
}

export default fetchMovies;

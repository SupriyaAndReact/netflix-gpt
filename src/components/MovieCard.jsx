import React from 'react'
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ movieId,posterPath }) => {
  if (!posterPath) return null 

  return ( 
    <div className="w-36 md:w-48 pr-3 rounded-xl md:hover:w-48 h-82 opacity-100 transition duration-400 hover:scale-125">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>    
  );
};
export default MovieCard
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import { useSelector } from "react-redux"
import GptSearch from "./GptSearch"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"

const Browse =()=> {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return(
        <div>
            <Header />
            {
                showGptSearch ? <GptSearch /> : <><MainContainer />
                <SecondaryContainer /></>
            }
            
        </div>
    )
}

export default Browse
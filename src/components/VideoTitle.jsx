const VideoTitle = (props) => {
    return(
        <div className="absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="font-bold text-6xl">{props.title}</h1>
            <p className="py-6 text-lg w-1/4">{props.overview}</p>
            <div> 
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-80">
                ▶ Play
                </button>
                <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl rounded-lg">
                ℹ️ More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
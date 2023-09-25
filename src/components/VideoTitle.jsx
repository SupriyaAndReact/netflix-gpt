import {AiOutlineInfoCircle , AiOutlinePlayCircle} from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className="w-[160px] bg-white text-black p-1 md:p-2 lg:p-4 px-1 md:px-2 lg:px-12 text-xl rounded-lg items-center hover:bg-opacity-80">
              <AiOutlinePlayCircle className="inline"/> Play
          </button>
          <button className="hidden md:inline-block lg:inline-block mx-2 w-[210px] bg-gray-500 text-white p-1 md:p-2  lg:p-4 px-1 md:px-2 lg:px-12 text-xl bg-opacity-50 rounded-lg">
            <AiOutlineInfoCircle className="inline"/> More info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;
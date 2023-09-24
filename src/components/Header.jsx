import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logoURL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store)=> store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate('/error')
          });
    }

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser
                ({ user : uid,email: email,displayName: displayName, photoURL:photoURL}))
                navigate('/browse')
            } else {
               dispatch(removeUser())
               navigate('/')
            }
          });
        return ()=> unSubscribe()
    },[])

    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={logoURL} alt='logo' />
        {user && (<div className="flex p-2 justify-between">
          { showGptSearch &&
            <select className="p-2 m-2 my-4 h-12 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }
            <button className="py-0 h-12 px-4  mx-4 my-4 text-white bg-purple-800 rounded-lg cursor-pointer" onClick={handleGptSearchClick}>
                {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img className='hidden md:inline-block w-10 h-9 my-6' src={user?.photoURL} alt='usericon' />
            <button className="font-bold text-white cursor-pointer mx-2" onClick={handleSignOut}>Sign Out</button>
        </div>)}
    </div>
}

export default Header
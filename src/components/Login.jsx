import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth" 
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { BG_URL, USER_AVATAR } from '../utils/constants'

const Login = () => {
    const [isSignIn,setSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignIn = () => {
        setSignIn(!isSignIn)
        if(name?.current?.value)       
            name.current.value = ""
        if(email?.current?.value)
            email.current.value = ""
        if(password?.current?.value)
            password.current.value = ""
    }

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return
        if(!isSignIn)
        {
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser
                    dispatch(addUser({ user : uid,email: email,displayName: displayName, photoURL:photoURL}))
                  }).catch((error) => {
                    setErrorMessage(error.errorMessage)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-" +errorMessage)
            });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch((error) => {
                setErrorMessage('Incorrect userid/password. Please try again ')
            })
        }
    }

    return <div>
        <Header />
        <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} alt='bg-img'/></div>
        <form className="w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(event)=> event.preventDefault()}>
            <h1 className="font-bold text-3xl py-4">{isSignIn ? 'Sign In' : 'Sign Up '}</h1>
            {!isSignIn? <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" ref={name} placeholder="Full name" /> : ''}
            <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" ref={email} placeholder="Email address" />
            <input type="password" className="p-4 my-4 w-full bg-gray-700 rounded-md" ref={password} placeholder="Password" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleButtonClick}>Sign In</button>
            <p className="p-4 cursor-pointer" onClick={toggleSignIn}>{isSignIn? 'New to Netflix? Sign up now' : 'Already registered? Sign in now'}</p>
        </form>
        </div>
}

export default Login
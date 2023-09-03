import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignIn,setSignIn] = useState(true)

    const toggleSignIn = () => {
        setSignIn(!isSignIn)
    }

    return <div>
        <Header />
        <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-image'/></div>
        <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignIn ? 'Sign In' : 'Sign Up '}</h1>
            {!isSignIn? <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Full name" /> : ''}
            <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Email address" />
            <input type="password" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Password" />
            <button className="p-4 my-6 bg-red-700 w-full rounded-md">Sign In</button>
            <p className="p-4 cursor-pointer" onClick={toggleSignIn}>{isSignIn? 'New to Netflix? Sign up now' : 'Already registered? Sign in now'}</p>
        </form>
        </div>
}

export default Login
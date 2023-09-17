export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordValid=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const name = /^[a-zA-Z ] {2,30}$/
    if(!name) return 'Name is not valid'
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null
} 
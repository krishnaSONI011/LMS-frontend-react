import { useState, useContext, useEffect, createContext } from "react";

let AuthContext = createContext()

let AuthProvider = ({ children }) => {

    let [auth, setAuth] = useState(false)
   

    return (

        <AuthContext.Provider value = {[auth, setAuth] } >

        { children } 
        </AuthContext.Provider>


    )
}
let useAuth = () => useContext(AuthContext)

        export { useAuth, AuthProvider }
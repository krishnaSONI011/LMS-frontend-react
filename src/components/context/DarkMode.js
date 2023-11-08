import React,{useContext,createContext,useState} from 'react';
const DarkModeContext = createContext()


const DarkProvider = ({children}) =>{
    
    const [darkmode,setMode] = useState(false);

    return(
        <DarkModeContext.Provider value={[darkmode,setMode]}>
            {children}
        </DarkModeContext.Provider>
    )
}

const useMode = ()=> useContext(DarkModeContext);

export {useMode,DarkProvider}
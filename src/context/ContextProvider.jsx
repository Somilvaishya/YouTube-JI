import React, { useState } from 'react'

const context = React.createContext()


const ContextProvider = ({ children }) => {

    const API_KEY = 'AIzaSyCO4F8cYpix6l3dv8z_9bgRfHgO45QgD8Y';
    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const [searchInput,setSearchInput] = useState('');
    const [showMobileSearch,setShowMobileSearch] = useState(false);

    
  const toggleAside =()=>{
    (isAsideOpen)?
    setIsAsideOpen(false):
    setIsAsideOpen(true);
    
  }
    const contextValue = {
        isAsideOpen,
        setIsAsideOpen,
        API_KEY,
        searchInput,
        setSearchInput,
        toggleAside,
        showMobileSearch,
        setShowMobileSearch
    }

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider
export { context }

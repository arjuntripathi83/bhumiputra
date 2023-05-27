import { useState } from "react";
import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <UserContext.Provider value={{profileOpen, setProfileOpen}}>
            {children}
        </UserContext.Provider>
    )
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
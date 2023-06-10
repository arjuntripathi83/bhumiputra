import { useState } from "react";
import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [profileOpen, setProfileOpen] = useState(false);

    const [userData, setUserData] = useState([]);

    return (
        <UserContext.Provider value={{profileOpen, setProfileOpen, userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
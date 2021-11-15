import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        _id: "618d78f3ec3816fcd220fa02",
        username: "Jaedon Lee",
        email: "jaedon@email.com",
        profilePicture: "person/jaedon_profile.jpg",
        coverPicture: "profilecover/cover1.jpg",
        isAdmin: false,
        followers: ["618d8d9603f676da63581ca7"],
        follwoings: ["618d8d9603f676da63581ca7"],
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider 
            value={
                {user: state.user, 
                isFetching: state.isFetching, 
                error: state.error,
                dispatch
            }}                
        >
            {children}
        </AuthContext.Provider>
    )
}
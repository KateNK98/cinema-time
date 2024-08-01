import { useContext } from "react";
import { login } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        console.log(result);
        changeAuthState(result);
    }

    return loginHandler;
}
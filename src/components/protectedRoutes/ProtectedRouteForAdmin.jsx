import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem("users"));
    if(user?.role === "admin"){
        return children
    } else {
        return <Navigate to={"/login"} />
    }
}
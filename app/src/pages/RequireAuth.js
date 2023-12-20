import { Navigate } from "react-router-dom"

const RequireAuth = ({ children, userroles }) => {
    let currentUserRole;
    if (localStorage.getItem("user")) {
        currentUserRole = JSON.parse(localStorage.getItem("user")).role;
    }

    if (currentUserRole) {
        if (userroles) {
            if (userroles.includes(currentUserRole)) {
                return children
            } else {
                return <Navigate to="/" />
            }
        } else {
            return children
        }
    } else {
        return <Navigate to="/login"/>
    }
}
export default RequireAuth
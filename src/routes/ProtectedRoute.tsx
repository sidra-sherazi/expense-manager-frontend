import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import DashboardLayout from "../components/layout/DashboardLayout";


export default function ProtectedRoute() {


const { token } = useAuth();



if(!token){

return <Navigate to="/login" />;

}



return <DashboardLayout />;


}
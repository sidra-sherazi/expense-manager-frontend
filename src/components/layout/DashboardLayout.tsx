import { Outlet } from "react-router-dom";

import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";


export default function DashboardLayout(){


return (

<div className="flex min-h-screen bg-slate-100">


<Sidebar />



<div className="
flex-1
flex
flex-col
">


<Navbar />



<main className="
p-6
flex-1
">

<Outlet />

</main>



</div>



</div>

);


}
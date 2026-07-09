import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Layout(){


return (

<div className="flex min-h-screen">


<Sidebar />


<div className="flex-1">


<Navbar />


<main
className="
p-6
bg-slate-100
min-h-[calc(100vh-64px)]
"
>

<Outlet />

</main>


</div>


</div>

);


}
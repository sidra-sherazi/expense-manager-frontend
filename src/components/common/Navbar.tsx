import { UserCircle } from "lucide-react";
import { useLocation } from "react-router-dom";


export default function Navbar(){


const location = useLocation();



const title =
location.pathname
.split("/")
[1]
?.replace(
location.pathname.split("/")[1][0],
location.pathname.split("/")[1][0]?.toUpperCase()
)
||
"Dashboard";



return (

<header

className="
h-16
bg-white
border-b
flex
items-center
justify-between
px-6
"

>


<h2 className="
text-xl
font-semibold
text-slate-700
">

{title}

</h2>



<div className="
flex
items-center
gap-3
text-slate-600
">


<UserCircle size={30}/>


<span>
User
</span>


</div>



</header>

);


}
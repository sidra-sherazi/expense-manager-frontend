import {
  LayoutDashboard,
  Wallet,
  Tags,
  BarChart3,
  FileText,
  LogOut,
  User,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";



export default function Sidebar() {


const { logout } = useAuth();

const navigate = useNavigate();



const menuItems = [

{
name:"Dashboard",
path:"/dashboard",
icon:LayoutDashboard
},

{
name:"Expenses",
path:"/expenses",
icon:Wallet
},

{
name:"Categories",
path:"/categories",
icon:Tags
},

{
name:"Analytics",
path:"/analytics",
icon:BarChart3
},

{
name:"Reports",
path:"/reports",
icon:FileText
},

{
name:"Profile",
path:"/profile",
icon:User
}

];





const handleLogout = ()=>{

logout();

navigate("/login");

};





return (

<aside

className="
w-64
min-h-screen
bg-slate-900
text-white
p-5
flex
flex-col
"

>



{/* Logo */}

<div>

<h1

className="
text-2xl
font-bold
mb-8
"

>

Expense Manager

</h1>



<nav

className="
space-y-2
"

>


{

menuItems.map((item)=>{


const Icon = item.icon;



return (


<NavLink

key={item.path}

to={item.path}

className={({isActive})=>`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive
?
"bg-blue-600 text-white shadow-lg"
:
"text-slate-300 hover:bg-slate-800 hover:text-white"
}

`}

>


<Icon size={20}/>


<span>

{item.name}

</span>


</NavLink>


);


})

}



</nav>


</div>





{/* Logout at bottom */}


<button

onClick={handleLogout}

className="
mt-auto
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-red-400
hover:bg-slate-800
hover:text-red-300
transition
w-full
"

>


<LogOut size={20}/>


<span>

Logout

</span>


</button>



</aside>

);


}
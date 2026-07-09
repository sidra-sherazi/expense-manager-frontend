import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { register } from "../../services/authService";



export default function Register(){


const navigate = useNavigate();



const [form,setForm]=useState({

name:"",
username:"",
email:"",
password:""

});



const [error,setError]=useState("");

const [loading,setLoading]=useState(false);





const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const handleSubmit=async(e:any)=>{


e.preventDefault();


setLoading(true);

setError("");



try{


await register(form);


alert("Registration successful");


navigate("/login");


}

catch(err:any){


setError(

err.response?.data?.detail ||

"Registration failed"

);


}

finally{


setLoading(false);


}


};





return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-indigo-600
to-purple-700
px-4
">



<div className="
bg-white
max-w-md
w-full
rounded-3xl
shadow-2xl
p-8
">



<h1 className="
text-3xl
font-bold
text-center
text-slate-800
">

Create Account

</h1>


<p className="
text-center
text-slate-500
mb-8
">

Start managing your expenses

</p>





{
error &&

<p className="
bg-red-100
text-red-600
p-3
rounded-lg
mb-5
">

{error}

</p>

}




<form

onSubmit={handleSubmit}

className="space-y-4"

>


<input

name="name"

placeholder="Full name"

value={form.name}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
"

/>



<input

name="username"

placeholder="Username"

value={form.username}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
"

/>




<input

name="email"

placeholder="Email"

type="email"

value={form.email}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
"

/>





<input

name="password"

placeholder="Password"

type="password"

value={form.password}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
"

/>





<button

disabled={loading}

className="
w-full
bg-indigo-600
text-white
py-3
rounded-xl
font-semibold
flex
justify-center
items-center
gap-2
"

>

<UserPlus size={20}/>


{
loading
?
"Creating..."
:
"Register"
}


</button>


</form>




<p className="
text-center
mt-6
text-slate-500
">

Already have an account?


<Link

to="/login"

className="
text-indigo-600
font-semibold
ml-2
"

>

Login

</Link>


</p>



</div>



</div>

);


}